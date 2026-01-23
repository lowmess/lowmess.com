import { z } from "astro:content";

export const concertSchema = z.object({
	date: z
		.string()
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	headliner: z.string(),
	openers: z.array(z.string()).optional(),
	venue: z.string(),
});

export type Concert = z.output<typeof concertSchema>;
