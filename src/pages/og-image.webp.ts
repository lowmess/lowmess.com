import { generateOgImage, OgSiteImage } from "#utils/og-image.tsx";

export async function GET() {
	const webp = await generateOgImage(OgSiteImage());

	return new Response(webp as Uint8Array<ArrayBuffer>, {
		headers: {
			"Content-Type": "image/webp",
		},
	});
}
