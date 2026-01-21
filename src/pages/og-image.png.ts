import type { APIRoute } from "astro";

import { generateOgImage, OgSiteImage } from "#utils/og-image.tsx";

export const GET: APIRoute = async () => {
	const png = await generateOgImage(OgSiteImage());

	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: {
			"Content-Type": "image/png",
			"Content-Length": png.length.toString(),
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
