import { type CollectionEntry } from "astro:content";

export function sortProjects(
	{ data: { date: firstDate } }: CollectionEntry<"projects">,
	{ data: { date: secondDate } }: CollectionEntry<"projects">,
) {
	return secondDate.valueOf() - firstDate.valueOf();
}
