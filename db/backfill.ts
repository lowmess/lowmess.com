import { Code, db, Film, Music, Social, sql, Sync } from "astro:db";

import { getBlueskyData } from "./bluesky";
import { getGithubData } from "./github";
import { getLastfmData } from "./lastfm";
import { getLetterboxdData } from "./letterboxd";
import { hasValue, isTuple } from "./utils";

const DATE_TO_BACKFILL_FROM = "2026-01-01";
const SET_SYNC_TABLE = true;
const UPDATE_BLUESKY = true;
const UPDATE_GITHUB = true;
const UPDATE_LASTFM = true;
const UPDATE_LETTERBOXD = true;

/**
 * helper function to re-sync database if/when sync action fails
 */
export default async function backfill() {
	const fromDate = new Date(DATE_TO_BACKFILL_FROM);
	fromDate.setUTCHours(0, 0, 0, 0);

	const from = fromDate.getTime();

	/*****************************************************************************
	 * B L U E S K Y
	 ****************************************************************************/
	if (UPDATE_BLUESKY) {
		try {
			const blueskyData = await getBlueskyData();

			if (!Object.keys(blueskyData.groupedCounts).length) {
				return;
			}

			// since bluesky is just an RSS feed, we can only grab the most recent items
			// anyways. so we should update everything we can, including the sync table
			const syncUpdate = db
				.insert(Sync)
				.values([
					{
						id: "1",
						blueskyGuid: blueskyData.latestGuid,
						githubTimestamp: undefined,
						lastfmTimestamp: undefined,
						letterboxdGuid: undefined,
					},
				])
				.onConflictDoUpdate({
					target: Sync.id,
					set: {
						blueskyGuid: sql`excluded.blueskyGuid`,
					},
				});

			const valueUpdates = Object.entries(blueskyData.groupedCounts).map(
				([key, value]) => {
					return db
						.insert(Social)
						.values({ date: key, postCount: value })
						.onConflictDoUpdate({
							target: Social.date,
							targetWhere: sql`date <> ${key}`,
							set: { postCount: sql`excluded.postCount` },
						});
				},
			);

			await db.batch([syncUpdate, ...valueUpdates]);
		} catch (error) {
			console.warn("failure loading or setting bluesky data:");
			console.warn(error);
		}
	}

	/*****************************************************************************
	 * G I T H U B
	 ****************************************************************************/
	if (UPDATE_GITHUB) {
		try {
			const githubData = await getGithubData({ from });

			if (!Object.keys(githubData.groupedStats).length) {
				return;
			}

			let syncUpdate;

			if (SET_SYNC_TABLE) {
				syncUpdate = db
					.insert(Sync)
					.values([
						{
							id: "1",
							blueskyGuid: undefined,
							githubTimestamp: githubData.lastTimestamp,
							lastfmTimestamp: undefined,
							letterboxdGuid: undefined,
						},
					])
					.onConflictDoUpdate({
						target: Sync.id,
						set: {
							githubTimestamp: sql`excluded.githubTimestamp`,
						},
					});
			}

			const valueUpdates = Object.entries(githubData.groupedStats).map(
				([key, value]) => {
					return db
						.insert(Code)
						.values({ date: key, ...value })
						.onConflictDoUpdate({
							target: Code.date,
							targetWhere: sql`date <> ${key}`,
							set: {
								commitCount: sql`excluded.commitCount`,
								pullRequestCount: sql`excluded.pullRequestCount`,
								reviewCount: sql`excluded.reviewCount`,
							},
						});
				},
			);

			const updates = [syncUpdate, ...valueUpdates].filter(hasValue);

			if (isTuple(updates)) {
				await db.batch(updates);
			}
		} catch (error) {
			console.warn("failure loading or setting github data:");
			console.warn(error);
		}
	}

	/*****************************************************************************
	 * L A S T . F M
	 ****************************************************************************/
	if (UPDATE_LASTFM) {
		try {
			const lastfmData = await getLastfmData({ from });

			if (!Object.keys(lastfmData.groupedStats).length) {
				return;
			}

			let syncUpdate;

			if (SET_SYNC_TABLE) {
				syncUpdate = db
					.insert(Sync)
					.values([
						{
							id: "1",
							blueskyGuid: undefined,
							githubTimestamp: undefined,
							lastfmTimestamp: lastfmData.lastTimestamp,
							letterboxdGuid: undefined,
						},
					])
					.onConflictDoUpdate({
						target: Sync.id,
						set: {
							lastfmTimestamp: sql`excluded.lastfmTimestamp`,
						},
					});
			}

			const valueUpdates = Object.entries(lastfmData.groupedStats).map(
				([key, value]) => {
					return db
						.insert(Music)
						.values({
							date: key,
							playCount: value.playCount,
							mostPlayedAlbumName: value.mostPlayedAlbum.name,
							mostPlayedAlbumArtist: value.mostPlayedAlbum.artist,
							mostPlayedAlbumPlayCount: value.mostPlayedAlbum.playCount,
						})
						.onConflictDoUpdate({
							target: Music.date,
							targetWhere: sql`date <> ${key}`,
							set: {
								playCount: sql`excluded.playCount`,
								mostPlayedAlbumName: sql`excluded.mostPlayedAlbumName`,
								mostPlayedAlbumArtist: sql`excluded.mostPlayedAlbumArtist`,
								mostPlayedAlbumPlayCount: sql`excluded.mostPlayedAlbumPlayCount`,
							},
						});
				},
			);

			const updates = [syncUpdate, ...valueUpdates].filter(hasValue);

			if (isTuple(updates)) {
				await db.batch(updates);
			}
		} catch (error) {
			console.warn("failure loading or setting last.fm data:");
			console.warn(error);
		}
	}

	/*****************************************************************************
	 * L E T T E R B O X D
	 ****************************************************************************/
	if (UPDATE_LETTERBOXD) {
		try {
			const letterboxdData = await getLetterboxdData();

			if (!Object.keys(letterboxdData.groupedCounts).length) {
				return;
			}

			// since letterboxd is just an RSS feed, we can only grab the most recent items
			// anyways. so we should update everything we can, including the sync table
			const syncUpdate = db
				.insert(Sync)
				.values([
					{
						id: "1",
						blueskyGuid: undefined,
						githubTimestamp: undefined,
						lastfmTimestamp: undefined,
						letterboxdGuid: letterboxdData.latestGuid,
					},
				])
				.onConflictDoUpdate({
					target: Sync.id,
					set: {
						letterboxdGuid: sql`excluded.letterboxdGuid`,
					},
				});

			const valueUpdates = Object.entries(letterboxdData.groupedCounts).map(
				([key, value]) => {
					return db
						.insert(Film)
						.values({ date: key, diaryLogCount: value })
						.onConflictDoUpdate({
							target: Film.date,
							targetWhere: sql`date <> ${key}`,
							set: { diaryLogCount: sql`excluded.diaryLogCount` },
						});
				},
			);

			await db.batch([syncUpdate, ...valueUpdates]);
		} catch (error) {
			console.warn("failure loading or setting letterboxd data:");
			console.warn(error);
		}
	}
}
