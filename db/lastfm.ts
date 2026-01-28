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
	page?: number;
};

async function getTracks({
	from,
	to: toFromParams = Date.now(),
	tracks: tracksFromParams = [],
	page = 1,
}: GetTracksParams) {
	const to = Math.max(OLDEST_POSSIBLE_TIMESTAMP, toFromParams);

	const uri = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=200&page=${page}&user=${
		process.env.LASTFM_USER_NAME
	}&from=${Math.floor(from / 1000)}&to=${Math.floor(
		to / 1000,
	)}&api_key=${process.env.LASTFM_API_KEY}&format=json`;

	const res = await fetch(uri);
	const json = await res.json();

	if (json.error) {
		throw new Error(json.message);
	}

	const { totalPages: totalPagesRaw = "1" } = json.recenttracks["@attr"];
	const totalPages = parseInt(totalPagesRaw, 10);

	const tracksFromResponse = json.recenttracks.track as Array<Track>;
	const tracksFromJson = Array.isArray(tracksFromResponse)
		? tracksFromResponse
		: [tracksFromResponse];

	let tracks = [...tracksFromParams, ...tracksFromJson];

	if (totalPages > page) {
		tracks = await getTracks({
			from,
			to,
			tracks: [...tracks],
			page: page + 1,
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
	from: fromFromParams = getDefaultTimePeriod(),
}: GetDataParams = {}) {
	// adjust from time to start of the previous day to always return at least
	// one full day's stats
	const fromDate = new Date(fromFromParams);
	fromDate.setUTCDate(fromDate.getUTCDate() - 1);
	fromDate.setUTCHours(0, 0, 0, 0);

	const from = fromDate.getTime();

	const tracks = await getTracks({
		from,
	});

	const firstTrackWithTimestamp = tracks.find((track) => !!track.date?.uts);

	if (!firstTrackWithTimestamp) {
		return {
			lastTimestamp: fromFromParams,
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
