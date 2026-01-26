import "dotenv/config";
import Parser from "rss-parser";

import { OLDEST_POSSIBLE_TIMESTAMP } from "./consts.ts";

const parser = new Parser();

type Params = {
	lastReadGuid?: string;
};

export async function getBlueskyData({ lastReadGuid }: Params = {}) {
	const feed = await parser.parseURL(
		`https://bsky.app/profile/${process.env.BLUESKY_DID}/rss`,
	);

	const filteredItems = feed.items.filter((item) => {
		if (!item.guid || !item.isoDate) {
			return false;
		}

		if (new Date(item.isoDate).getTime() < OLDEST_POSSIBLE_TIMESTAMP) {
			return false;
		}

		return lastReadGuid ? item.guid > lastReadGuid : true;
	});

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
		{} satisfies Record<string, number>,
	);

	return {
		latestGuid: feed.items[0].guid,
		groupedCounts,
	};
}
