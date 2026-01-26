import "dotenv/config";

import { getDefaultTimePeriod } from "./utils.ts";

type GithubStat = {
	commitCount: number;
	pullRequestCount: number;
	reviewCount: number;
};

type Params = {
	from?: number;
};

/**
 * note that because contributions can be delayed, this will always count from
 * 00:00:00 on the date of the `from` timestamp. therefore, rather than
 * counting up in the database, this should always replace the data. additionally,
 * the timestamp returned is intentionally set 7 days in the past, so sync will
 * look back to capture straggling contributions.
 */
export async function getGithubData({
	from = getDefaultTimePeriod(),
}: Params = {}) {
	const instant = new Date();
	instant.setUTCDate(instant.getUTCDate() - 7);
	instant.setUTCHours(0, 0, 0, 0);
	const nextTimestamp = instant.getTime();

	const fromDate = new Date(from);
	fromDate.setUTCHours(0, 0, 0, 0);

	const query = `query recentCommits($fromDate: DateTime) {
    viewer {
      contributionsCollection(from: $fromDate) {
        commitContributionsByRepository {
					contributions(last: 100) {
						nodes {
							commitCount
							occurredAt
						}
					}
				}
				pullRequestContributions(last: 100) {
					nodes {
						occurredAt
					}
				}
				pullRequestReviewContributions(last: 100) {
					nodes {
						occurredAt
					}
				}
      }
    }
  }`;

	const res = await fetch(`https://api.github.com/graphql`, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables: {
				fromDate: fromDate.toISOString(),
			},
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
		},
	});
	const json = await res.json();

	const contributions = json.data.viewer.contributionsCollection;

	const mappedContributions: Array<{
		occurredAt: string;
		type: "commit" | "pullRequest" | "review";
		commitCount?: number;
	}> = [
		// @ts-expect-error i do not want to type out the github api
		...contributions.commitContributionsByRepository.flatMap((c) =>
			// @ts-expect-error i do not want to type out the github api
			c.contributions.nodes.map((node) => ({ ...node, type: "commit" })),
		),
		// @ts-expect-error i do not want to type out the github api
		...contributions.pullRequestContributions.nodes.map((node) => ({
			...node,
			type: "pullRequest",
		})),
		// @ts-expect-error i do not want to type out the github api
		...contributions.pullRequestReviewContributions.nodes.map((node) => ({
			...node,
			type: "review",
		})),
	];

	const groupedStats = mappedContributions.reduce(
		(groups, contribution) => {
			const formattedDateString = contribution.occurredAt.split("T")[0];

			if (!groups[formattedDateString]) {
				groups[formattedDateString] = {
					commitCount:
						contribution.type === "commit"
							? (contribution.commitCount ?? 0)
							: 0,
					pullRequestCount: contribution.type === "pullRequest" ? 1 : 0,
					reviewCount: contribution.type === "review" ? 1 : 0,
				};
				return groups;
			}

			const thisGroup = groups[formattedDateString];

			switch (contribution.type) {
				case "commit":
					thisGroup.commitCount += contribution.commitCount ?? 0;
					break;

				case "pullRequest":
					thisGroup.pullRequestCount += 1;
					break;

				case "review":
					thisGroup.reviewCount += 1;
					break;

				default:
					return contribution.type satisfies never;
			}

			return groups;
		},
		{} as Record<string, GithubStat>,
	);

	return {
		lastTimestamp: nextTimestamp,
		groupedStats,
	};
}
