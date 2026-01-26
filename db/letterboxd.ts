import "dotenv/config";
import Parser from "rss-parser";

import { OLDEST_POSSIBLE_TIMESTAMP } from "./consts.ts";

const parser = new Parser();

type Params = {
	lastReadGuid?: string;
};

export async function getLetterboxdData({ lastReadGuid }: Params = {}) {
	const feed = await parser.parseURL(
		`https://letterboxd.com/${process.env.LETTERBOXD_USER_NAME}/rss`,
	);

	const diaryEntries = feed.items
		.filter((item) => {
			if (!item.guid || !item.isoDate) {
				return false;
			}

			if (new Date(item.isoDate).getTime() < OLDEST_POSSIBLE_TIMESTAMP) {
				return false;
			}

			return (
				item.guid.includes("letterboxd-watch") ||
				item.guid.includes("letterboxd-review")
			);
		})
		.map((item) => ({
			...item,
			guid: item.guid?.split("-").pop(),
		}));

	const filteredItems = lastReadGuid
		? diaryEntries.filter((item) => {
				if (!item.guid) {
					return false;
				}

				return item.guid > lastReadGuid;
			})
		: diaryEntries;

	const groupedCounts = filteredItems.reduce(
		(groups, item) => {
			if (!item.isoDate) {
				return groups;
			}

			const rawDate = new Date(item.isoDate);
			const formattedDateString = rawDate.toISOString().split("T")[0];

			if (!groups[formattedDateString]) {
				groups[formattedDateString] = 1;
				return groups;
			}

			groups[formattedDateString] += 1;
			return groups;
		},
		{} as Record<string, number>,
	);

	return {
		latestGuid: diaryEntries[0].guid,
		groupedCounts,
	};
}
