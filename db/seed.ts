import { db, Sync, Code, Film, Music, Social } from "astro:db";

import { getBlueskyData } from "./bluesky";
import { getLetterboxdData } from "./letterboxd";
import { getLastfmData } from "./lastfm";
import { getGithubData } from "./github";

/** @link https://astro.build/db/seed */
export default async function seed() {
	const today = new Date();
	const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

	const blueskyData = await getBlueskyData();
	const githubData = await getGithubData({
		from: firstOfMonth.getTime(),
	});
	const lastfmData = await getLastfmData({
		from: firstOfMonth.getTime(),
	});
	const letterboxdData = await getLetterboxdData();

	await db.insert(Sync).values([
		{
			id: "1",
			blueskyGuid: blueskyData.latestGuid,
			githubTimestamp: githubData.lastTimestamp,
			lastfmTimestamp: lastfmData.lastTimestamp,
			letterboxdGuid: letterboxdData.latestGuid,
		},
	]);

	await db.insert(Code).values(
		Object.entries(githubData.groupedStats).map(([key, value]) => {
			return {
				date: key,
				...value,
			};
		}),
	);

	await db.insert(Film).values(
		Object.entries(letterboxdData.groupedCounts).map(([key, value]) => {
			return {
				date: key,
				diaryLogCount: value,
			};
		}),
	);

	await db.insert(Music).values(
		Object.entries(lastfmData.groupedStats).map(([key, value]) => {
			return {
				date: key,
				playCount: value.playCount,
				mostPlayedAlbumName: value.mostPlayedAlbum.name,
				mostPlayedAlbumArtist: value.mostPlayedAlbum.artist,
				mostPlayedAlbumPlayCount: value.mostPlayedAlbum.playCount,
			};
		}),
	);

	await db.insert(Social).values(
		Object.entries(blueskyData.groupedCounts).map(([key, value]) => {
			return {
				date: key,
				postCount: value,
			};
		}),
	);
}
