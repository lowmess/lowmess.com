import type { APIRoute } from "astro";
import satori from "satori";
import sharp from "sharp";

import strawford from "#assets/fonts/strawford-bold-webfont.woff";
import { OgSiteImage } from "#utils/og-image.tsx";

export const GET: APIRoute = async () => {
	const svg = await satori(OgSiteImage(), {
		width: 1200,
		height: 635,
		fonts: [
			{
				name: "Strawford",
				data: Buffer.from(strawford),
				weight: 700,
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
