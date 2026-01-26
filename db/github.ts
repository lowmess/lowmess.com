import "dotenv/config";

import { getDefaultTimePeriod, getPacificTimezoneMsOffset } from "./utils.ts";

type GithubStat = {
	commitCount: number;
	pullRequestCount: number;
	reviewCount: number;
};

type Params = {
	from?: number;
};

export async function getGithubData({
	from = getDefaultTimePeriod(),
}: Params = {}) {
	const nextTimestamp = Date.now();
	const fromDate = new Date(from);
	const today = new Date(new Date().getTime() - getPacificTimezoneMsOffset());
	const daysToCheck: Array<Date> = [];

	while (fromDate < today) {
		daysToCheck.push(new Date(fromDate));
		fromDate.setDate(fromDate.getDate() + 1);
	}

	const query = `query recentCommits($fromDate: DateTime, $toDate: DateTime) {
    viewer {
      contributionsCollection(from: $fromDate, to: $toDate) {
        totalCommitContributions
				totalPullRequestContributions
				totalPullRequestReviewContributions
      }
    }
  }`;

	const groupedStats: Record<string, GithubStat> = {};

	// it is not possible (as far as i can tell) to get this data grouped by
	// date directly from github. so we are just making X number of requests
	await Promise.all(
		daysToCheck.map(async (day, index) => {
			const toDate = daysToCheck[index + 1];

			if (!toDate) {
				return;
			}

			const res = await fetch(`https://api.github.com/graphql`, {
				method: "POST",
				body: JSON.stringify({
					query,
					variables: {
						fromDate: day.toISOString(),
						toDate: toDate.toISOString(),
					},
				}),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
				},
			});
			const json = await res.json();

			const contributions = json.data.viewer.contributionsCollection;

			const label = day.toISOString().split("T").shift();

			groupedStats[label!] = {
				commitCount: contributions.totalCommitContributions,
				pullRequestCount: contributions.totalPullRequestContributions,
				reviewCount: contributions.totalPullRequestReviewContributions,
			};
		}),
	);

	return {
		lastTimestamp: nextTimestamp,
		groupedStats,
	};
}
