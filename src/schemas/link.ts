import { z } from "astro/zod";

export const sharedLinkSchema = z.object({
	title: z.string(),
	date: z.iso
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	url: z.url(),
});

export type SharedLink = z.output<typeof sharedLinkSchema>;
