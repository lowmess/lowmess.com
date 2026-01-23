import { z } from "astro:content";

export const screeningSchema = z.object({
	date: z
		.string()
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	title: z.string(),
	venue: z.string(),
	format: z
		.enum(["35mm", "70mm", "IMAX", "IMAX 3D", "3D", "Digital"])
		.default("Digital"),
	link: z.string(),
});

export type Screening = z.output<typeof screeningSchema>;
