import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import sharp from "sharp";

import izoard from "#assets/fonts/izoard-regular-webfont.woff";
import strawford from "#assets/fonts/strawford-bold-webfont.woff";
import { OgBlogPostImage } from "#utils/og-image.tsx";

const allPosts = await getCollection("blog", ({ data }) => !data.draft);

export const GET: APIRoute = async ({ params }) => {
	const { slug } = params;
	const post = allPosts.find((post) => post.id === slug);

	if (!post) {
		return new Response(null, {
			status: 404,
			statusText: "Not found",
		});
	}

	const { title, date } = post.data;

	const svg = await satori(OgBlogPostImage({ title, date }), {
		width: 1200,
		height: 635,
		fonts: [
			{
				name: "Strawford",
				data: Buffer.from(strawford),
				weight: 700,
				style: "normal",
			},
			{
				name: "Izoard",
				data: Buffer.from(izoard),
				weight: 400,
				style: "normal",
			},
		],
	});
	const png = await sharp(Buffer.from(svg)).resize(1200, 635).png().toBuffer();

	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: {
			"Content-Type": "image/png",
			"Content-Length": png.length.toString(),
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};

export async function getStaticPaths() {
	return allPosts.map((post) => ({
		params: { slug: post.id },
	}));
}
