import { type CollectionEntry } from "astro:content";

export function sortBlogPosts(
	{ data: { date: firstDate } }: CollectionEntry<"blog">,
	{ data: { date: secondDate } }: CollectionEntry<"blog">,
) {
	return secondDate.valueOf() - firstDate.valueOf();
}

type PostGroup = {
	year: string;
	posts: Array<CollectionEntry<"blog">>;
};

export function groupPostsByYear(
	posts: Array<CollectionEntry<"blog">>,
): Array<PostGroup> {
	const recordedPosts: Record<string, Array<CollectionEntry<"blog">>> = {};

	posts.forEach((post) => {
		const year = post.data.date.getFullYear().toString();

		if (!recordedPosts[year]) {
			recordedPosts[year] = [];
		}

		recordedPosts[year].push(post);
	});

	const groupedPosts = Object.entries(recordedPosts)
		.sort(([firstYear], [secondYear]) => {
			return secondYear.localeCompare(firstYear);
		})
		.map(([year, posts]) => ({
			year,
			posts: posts.sort(sortBlogPosts),
		}));

	return groupedPosts;
}
