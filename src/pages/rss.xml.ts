import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx/container-renderer";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import { type APIContext } from "astro";
import { getCollection, render } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";

import { SITE_DESCRIPTION, SITE_TITLE } from "#consts";
import { sortBlogPosts } from "#utils/blog";

export async function GET({ site }: APIContext) {
	const baseUrl = site?.origin ?? "https://lowmess.com";

	const renderers = await loadRenderers([getMDXRenderer()]);

	const container = await AstroContainer.create({ renderers });

	const posts = (
		await getCollection("blog", ({ data }) => !data.archived && !data.draft)
	).sort(sortBlogPosts);

	const feedItems: Array<RSSFeedItem> = [];

	for (const post of posts) {
		const { Content } = await render(post);

		const rawContent = await container.renderToString(Content);

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
}
