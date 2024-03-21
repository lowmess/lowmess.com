import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

const parser = new MarkdownIt();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function GET(context) {
	const posts = await getCollection("blog");

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			link: `/blog/${post.slug}/`,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			content: sanitizeHtml(parser.render(post.body)),
		})),
	});
}
