import { defineDb, defineTable, column } from "astro:db";

/** store last retrieved github timestamp, letterboxd guid, last.fm timestamp, bluesky guid */
const Sync = defineTable({
	columns: {
		id: column.text({ primaryKey: true, default: "1" }),
		blueskyGuid: column.text({ optional: true, unique: true }),
		githubTimestamp: column.number({ optional: true, unique: true }),
		lastfmTimestamp: column.number({ optional: true, unique: true }),
		letterboxdGuid: column.text({ optional: true, unique: true }),
	},
});

/** store git contributions by date */
const Code = defineTable({
	columns: {
		date: column.text({ primaryKey: true }),
		commitCount: column.number({ default: 0 }),
		pullRequestCount: column.number({ default: 0 }),
		reviewCount: column.number({ default: 0 }),
	},
});

/** store letterboxd diary counts by date */
const Film = defineTable({
	columns: {
		date: column.text({ primaryKey: true }),
		diaryLogCount: column.number({ default: 0 }),
	},
});

/** store song count & most listened to album by date */
const Music = defineTable({
	columns: {
		date: column.text({ primaryKey: true }),
		playCount: column.number({ default: 0 }),
		mostPlayedAlbumName: column.text(),
		mostPlayedAlbumArtist: column.text(),
		mostPlayedAlbumPlayCount: column.number({ default: 0 }),
	},
});

/** store post count by date */
const Social = defineTable({
	columns: {
		date: column.text({ primaryKey: true }),
		postCount: column.number({ default: 0 }),
	},
});

/** @link https://astro.build/db/config */
export default defineDb({
	tables: {
		Sync,
		Code,
		Film,
		Music,
		Social,
	},
});
