import {
	Code,
	db,
	eq,
	Film,
	inArray,
	Music,
	Social,
	sql,
	Sync,
} from "astro:db";
import "dotenv/config";

import { getBlueskyData } from "./bluesky";
import { getGithubData } from "./github";
import { getLastfmData } from "./lastfm";
import { getLetterboxdData } from "./letterboxd";

/**
 * syncs the database with the latest stats
 */
export default async function sync() {
	const [syncState] = await db.select().from(Sync).where(eq(Sync.id, "1"));

	/*****************************************************************************
	 * B L U E S K Y
	 ****************************************************************************/
	if (syncState.blueskyGuid) {
		try {
			const blueskyData = await getBlueskyData({
				lastReadGuid: syncState.blueskyGuid,
			});

			if (
				blueskyData.latestGuid &&
				Object.keys(blueskyData.groupedCounts).length
			) {
				const syncUpdate = db
					.update(Sync)
					.set({ blueskyGuid: blueskyData.latestGuid })
					.where(eq(Sync.id, "1"));

				const existingData = await db
					.select()
					.from(Social)
					.where(inArray(Social.date, Object.keys(blueskyData.groupedCounts)));

				const valueUpdates = Object.entries(blueskyData.groupedCounts).map(
					([key, value]) => {
						const existingStat = existingData.find((stat) => stat.date === key);

						if (existingStat) {
							return db
								.update(Social)
								.set({ postCount: existingStat.postCount + value })
								.where(eq(Social.date, key));
						}

						return (
							db
								.insert(Social)
								.values({ date: key, postCount: value })
								// this shouldn't be possible to hit, but doesn't hurt to be safe
								.onConflictDoUpdate({
									target: Social.date,
									targetWhere: sql`date <> ${key}`,
									set: { postCount: sql`excluded.postCount` },
								})
						);
					},
				);

				await db.batch([syncUpdate, ...valueUpdates]);
			}
		} catch (error) {
			console.warn("Error fetching or setting bluesky data");

			if (typeof process.env.VAL_TOWN_URL === "string") {
				await fetch(process.env.VAL_TOWN_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ service: "bluesky", error }, null, 2),
				});
			}
		}
	}

	/*****************************************************************************
	 * G I T H U B
	 ****************************************************************************/
	if (syncState.githubTimestamp) {
		try {
			const githubData = await getGithubData({
				from: syncState.githubTimestamp,
			});

			if (
				githubData.lastTimestamp &&
				Object.keys(githubData.groupedStats).length
			) {
				const syncUpdate = db
					.update(Sync)
					.set({ githubTimestamp: githubData.lastTimestamp })
					.where(eq(Sync.id, "1"));

				const existingData = await db
					.select()
					.from(Code)
					.where(inArray(Code.date, Object.keys(githubData.groupedStats)));

				const valueUpdates = Object.entries(githubData.groupedStats).map(
					([key, value]) => {
						const existingStat = existingData.find((stat) => stat.date === key);

						if (existingStat) {
							// the github resolver always returns a full day's count.
							// therefore, we always want to override on conflict
							return db.update(Code).set(value).where(eq(Code.date, key));
						}

						return (
							db
								.insert(Code)
								.values({ date: key, ...value })
								// this shouldn't be possible to hit, but doesn't hurt to be safe
								.onConflictDoUpdate({
									target: Code.date,
									targetWhere: sql`date <> ${key}`,
									set: {
										commitCount: sql`excluded.commitCount`,
										pullRequestCount: sql`excluded.pullRequestCount`,
										reviewCount: sql`excluded.reviewCount`,
									},
								})
						);
					},
				);

				await db.batch([syncUpdate, ...valueUpdates]);
			}
		} catch (error) {
			console.warn("Error fetching or setting github data");

			if (typeof process.env.VAL_TOWN_URL === "string") {
				await fetch(process.env.VAL_TOWN_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ service: "github", error }, null, 2),
				});
			}
		}
	}

	/*****************************************************************************
	 * L A S T . F M
	 ****************************************************************************/
	if (syncState.lastfmTimestamp) {
		try {
			const lastfmData = await getLastfmData({
				from: syncState.lastfmTimestamp,
			});

			if (
				lastfmData.lastTimestamp &&
				Object.keys(lastfmData.groupedStats).length
			) {
				const syncUpdate = db
					.update(Sync)
					.set({ lastfmTimestamp: lastfmData.lastTimestamp })
					.where(eq(Sync.id, "1"));

				const existingData = await db
					.select()
					.from(Music)
					.where(inArray(Music.date, Object.keys(lastfmData.groupedStats)));

				const valueUpdates = Object.entries(lastfmData.groupedStats).map(
					([key, value]) => {
						const existingStat = existingData.find((stat) => stat.date === key);

						if (existingStat) {
							if (existingStat) {
								// the last.fm resolver always returns at least one full day's
								// count. therefore, we always want to override on conflict
								return db
									.update(Music)
									.set({
										playCount: value.playCount,
										mostPlayedAlbumName: value.mostPlayedAlbum.name,
										mostPlayedAlbumArtist: value.mostPlayedAlbum.artist,
										mostPlayedAlbumPlayCount: value.mostPlayedAlbum.playCount,
									})
									.where(eq(Music.date, key));
							}
						}

						return (
							db
								.insert(Music)
								.values({
									date: key,
									playCount: value.playCount,
									mostPlayedAlbumName: value.mostPlayedAlbum.name,
									mostPlayedAlbumArtist: value.mostPlayedAlbum.artist,
									mostPlayedAlbumPlayCount: value.mostPlayedAlbum.playCount,
								})
								// this shouldn't be possible to hit, but doesn't hurt to be safe
								.onConflictDoUpdate({
									target: Music.date,
									targetWhere: sql`date <> ${key}`,
									set: {
										playCount: sql`excluded.playCount`,
										mostPlayedAlbumName: sql`excluded.mostPlayedAlbumName`,
										mostPlayedAlbumArtist: sql`excluded.mostPlayedAlbumArtist`,
										mostPlayedAlbumPlayCount: sql`excluded.mostPlayedAlbumPlayCount`,
									},
								})
						);
					},
				);

				await db.batch([syncUpdate, ...valueUpdates]);
			}
		} catch (error) {
			console.warn("Error fetching or setting last.fm data");

			if (typeof process.env.VAL_TOWN_URL === "string") {
				await fetch(process.env.VAL_TOWN_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ service: "last.fm", error }, null, 2),
				});
			}
		}
	}

	/*****************************************************************************
	 * L E T T E R B O X D
	 ****************************************************************************/
	if (syncState.letterboxdGuid) {
		try {
			const letterboxdData = await getLetterboxdData({
				lastReadGuid: syncState.letterboxdGuid,
			});

			if (
				letterboxdData.latestGuid &&
				Object.keys(letterboxdData.groupedCounts).length
			) {
				const syncUpdate = db
					.update(Sync)
					.set({ letterboxdGuid: letterboxdData.latestGuid })
					.where(eq(Sync.id, "1"));

				const existingData = await db
					.select()
					.from(Film)
					.where(inArray(Film.date, Object.keys(letterboxdData.groupedCounts)));

				const valueUpdates = Object.entries(letterboxdData.groupedCounts).map(
					([key, value]) => {
						const existingStat = existingData.find((stat) => stat.date === key);

						if (existingStat) {
							return db
								.update(Film)
								.set({ diaryLogCount: existingStat.diaryLogCount + value })
								.where(eq(Film.date, key));
						}

						return (
							db
								.insert(Film)
								.values({ date: key, diaryLogCount: value })
								// this shouldn't be possible to hit, but doesn't hurt to be safe
								.onConflictDoUpdate({
									target: Film.date,
									targetWhere: sql`date <> ${key}`,
									set: { diaryLogCount: sql`excluded.diaryLogCount` },
								})
						);
					},
				);

				await db.batch([syncUpdate, ...valueUpdates]);
			}
		} catch (error) {
			console.warn("Error fetching or setting letterboxd data");

			if (typeof process.env.VAL_TOWN_URL === "string") {
				await fetch(process.env.VAL_TOWN_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ service: "letterboxd", error }, null, 2),
				});
			}
		}
	}
}
