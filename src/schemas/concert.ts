import { z } from "astro/zod";

export const concertSchema = z.object({
	date: z.iso
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	headliner: z.string(),
	openers: z.array(z.string()).optional(),
	venue: z.string(),
	with: z.array(z.string()).optional(),
});

export type Concert = z.output<typeof concertSchema>;
