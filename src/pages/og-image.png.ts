import { generateOgImage, OgSiteImage } from "#utils/og-image.tsx";

export async function GET() {
	const png = await generateOgImage(OgSiteImage());

	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: {
			"Content-Type": "image/png",
		},
	});
}
