import { z } from "astro/zod";

export const SCREENING_FORMATS = Object.freeze({
	ThirtyFive: "35mm",
	Seventy: "70mm",
	IMAX: "IMAX",
	IMAX3D: "IMAX 3D",
	ThreeD: "3D",
	Digital: "Digital",
} as const);

export type ScreeningFormat =
	(typeof SCREENING_FORMATS)[keyof typeof SCREENING_FORMATS];

export const screeningSchema = z.object({
	date: z.iso
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	title: z.string(),
	format: z.enum(SCREENING_FORMATS).default(SCREENING_FORMATS.Digital),
	venue: z.string(),
	with: z.array(z.string()).optional(),
	link: z.string(),
});

export type Screening = z.output<typeof screeningSchema>;

export function isScreening(event: unknown): event is Screening {
	return (event as Screening).format !== undefined;
}
