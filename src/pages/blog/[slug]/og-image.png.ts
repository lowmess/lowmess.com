import { type APIContext } from "astro";
import { getCollection } from "astro:content";

import { generateOgImage, OgBlogPostImage } from "#utils/og-image.tsx";

const allPosts = await getCollection("blog", ({ data }) => !data.draft);

export async function getStaticPaths() {
	return allPosts.map((post) => ({
		params: { slug: post.id },
	}));
}

export async function GET({ params }: APIContext) {
	const { slug } = params;
	const post = allPosts.find((post) => post.id === slug);

	if (!post) {
		return new Response(null, {
			status: 404,
			statusText: "Not found",
		});
	}

	const { title, date } = post.data;
	const png = await generateOgImage(OgBlogPostImage({ title, date }));

	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: {
			"Content-Type": "image/png",
		},
	});
}
