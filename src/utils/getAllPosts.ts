/* eslint-disable import/exports-last */
const importAll = (r: __WebpackModuleApi.RequireContext) => {
	return r.keys().map((fileName) => ({
		link: `/blog${fileName.substring(1).replace(/\.mdx$/, '')}`,
		meta: r(fileName).meta,
	}))
}

export type Meta = {
	title: string
	description?: string
	date?: string
}

export type Post = {
	link: string
	meta: Meta
}

const dateSortDesc = (a: Post, b: Post) => {
	const date1 = new Date(a.meta.date)
	const date2 = new Date(b.meta.date)

	if (date1 > date2) return -1
	if (date1 < date2) return 1
	return 0
}

const posts = importAll(require.context('../pages/blog/', true, /\.mdx$/)).sort(
	dateSortDesc
)

export default posts
