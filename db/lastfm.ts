import "dotenv/config";

import { OLDEST_POSSIBLE_TIMESTAMP } from "./consts.ts";
import { getDefaultTimePeriod } from "./utils.ts";

type Track = {
	artist: {
		/** the artist name */
		"#text": string;
	};
	album: {
		/** the album name */
		"#text": string;
	};
	name: string;
	date: {
		/** epoch timestamp but in seconds for some reason */
		uts: string;
		/** date string */
		"#text": string;
	};
	"@attr"?: {
		nowplaying: true;
	};
};

type GetTracksParams = {
	from: number;
	to?: number;
	tracks?: Array<Track>;
};

async function getTracks({
	from,
	to: toFromParams = Date.now(),
	tracks: tracksFromParams = [],
}: GetTracksParams) {
	const to = Math.max(OLDEST_POSSIBLE_TIMESTAMP, toFromParams);

	const uri = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=200&user=${
		process.env.LASTFM_USER_NAME
	}&from=${Math.floor(from / 1000)}&to=${Math.floor(
		to / 1000,
	)}&api_key=${process.env.LASTFM_API_KEY}&format=json`;

	const res = await fetch(uri);
	const json = await res.json();

	const tracksFromResponse = json.recenttracks.track as Array<Track>;
	const tracksFromJson = Array.isArray(tracksFromResponse)
		? tracksFromResponse
		: [tracksFromResponse];

	let tracks = [...tracksFromParams, ...tracksFromJson];

	const lastTrackWithTimestamp = tracksFromJson.findLast(
		(track) => !!track.date?.uts,
	);

	// if this block triggers, it is very likely that the only track returned is
	// the one i am currently listening to
	if (!lastTrackWithTimestamp) {
		return tracks;
	}

	const lastTimestamp = parseInt(lastTrackWithTimestamp.date.uts, 10) * 1000;

	if (lastTimestamp > from) {
		tracks = await getTracks({
			from,
			to: lastTimestamp,
			tracks: [...tracks],
		});
	}

	return tracks;
}

type LastfmStat = {
	playCount: number;
	mostPlayedAlbum: {
		name: string;
		artist: string;
		playCount: number;
	};
};

type GetDataParams = {
	from?: number;
};

export async function getLastfmData({
	from = getDefaultTimePeriod(),
}: GetDataParams = {}) {
	const tracks = await getTracks({
		from,
	});

	const firstTrackWithTimestamp = tracks.find((track) => !!track.date?.uts);

	if (!firstTrackWithTimestamp) {
		return {
			lastTimestamp: Date.now(),
			groupedStats: [],
		};
	}

	// first step, group all the tracks together
	// this must be a separate step so we can reduce over each day to determine
	// the album that appears most frequently
	const groupedTracks = tracks.reduce(
		(groups, track) => {
			if (!track.date?.uts) {
				return groups;
			}

			const timestamp = parseInt(track.date.uts, 10) * 1000;
			const date = new Date(timestamp);
			const formattedDateString = date.toISOString().split("T")[0];

			if (!groups[formattedDateString]) {
				groups[formattedDateString] = [track];
				return groups;
			}

			groups[formattedDateString].push(track);
			return groups;
		},
		{} as Record<string, Array<Track>>,
	);

	// now we parse the tracks in each date
	const groupedStats: Record<string, LastfmStat> = {};

	Object.entries(groupedTracks).forEach(([date, tracks]) => {
		// these nested loops are probably slow as all hell. but they never touch
		// a UI and should only have to parse a few hundred tracks at most
		const albumCounts = tracks.reduce(
			(albums, track) => {
				const album = track.album["#text"];
				const artist = track.artist["#text"];

				const key = `${album}/${artist}`;

				if (!albums[key]) {
					albums[key] = {
						name: album,
						artist,
						playCount: 1,
					};
					return albums;
				}

				albums[key].playCount += 1;
				return albums;
			},
			{} as Record<
				string,
				{
					name: string;
					artist: string;
					playCount: number;
				}
			>,
		);

		const mostPlayedAlbum = Object.values(albumCounts).reduce(
			(winningAlbum, currentAlbum) => {
				if (!winningAlbum.playCount) {
					return currentAlbum;
				}

				return currentAlbum.playCount > winningAlbum.playCount
					? currentAlbum
					: winningAlbum;
			},
			{} as {
				name: string;
				artist: string;
				playCount: number;
			},
		);

		groupedStats[date] = {
			playCount: tracks.length,
			mostPlayedAlbum,
		};
	});

	return {
		lastTimestamp: parseInt(firstTrackWithTimestamp.date.uts, 10) * 1000,
		groupedStats,
	};
}
