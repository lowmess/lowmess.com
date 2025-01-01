import rss from "@astrojs/rss";
import { type APIRoute } from "astro";
import { getCollection } from "astro:content";

import { SITE_DESCRIPTION, SITE_TITLE } from "#/consts";
import { sortBlogPosts } from "#utils/blog.ts";

export const GET: APIRoute = async ({ site = "https://lowmess.com" }) => {
	const posts = (
		await getCollection("blog", ({ data }) => !data.archived && !data.draft)
	).sort(sortBlogPosts);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site,
		items: posts.map((post) => ({
			link: `/blog/${post.id}/`,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			// TODO render MDX to provide full text when containers are stable
		})),
	});
};
