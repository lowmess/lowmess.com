export const dateSortDesc = (a: FrontMatter, b: FrontMatter): number => {
	const date1 = new Date(a.datetime)
	const date2 = new Date(b.datetime)

	if (date1 > date2) return -1
	if (date1 < date2) return 1
	return 0
}
