import rss, { type RSSFeedItem } from "@astrojs/rss";
import { type APIRoute } from "astro";
import { getCollection } from "astro:content";
import markdownit from "markdown-it";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";

import { SITE_DESCRIPTION, SITE_TITLE } from "#consts";
import { sortBlogPosts } from "#utils/blog.ts";

export const GET: APIRoute = async ({ site }) => {
	const baseUrl = site?.origin ?? "https://lowmess.com";

	const posts = (
		await getCollection("blog", ({ data }) => !data.archived && !data.draft)
	).sort(sortBlogPosts);

	const md = markdownit();

	const feedItems: Array<RSSFeedItem> = [];

	for (const post of posts) {
		const rawContent = md.render(post.body ?? "");

		const content = await transform(rawContent, [
			async (node) => {
				// transform relative links & images to absolute ones
				await walk(node, (node) => {
					if (node.name === "a" && node.attributes.href?.startsWith("/")) {
						node.attributes.href = `${baseUrl}${node.attributes.href}`;
					}

					if (node.name === "img" && node.attributes.src?.startsWith("/")) {
						node.attributes.src = `${baseUrl}${node.attributes.src}`;
					}
				});
				return node;
			},
			// remove any script or style elements
			sanitize({ dropElements: ["script", "style"] }),
		]);

		feedItems.push({
			link: `/blog/${post.id}/`,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			content,
		});
	}

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: site ?? baseUrl,
		items: feedItems,
	});
};
