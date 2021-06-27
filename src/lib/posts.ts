import { Meta } from '../types/posts'

const importAll = (r: __WebpackModuleApi.RequireContext) => {
	return r.keys().map((fileName) => {
		const meta = r(fileName).meta

		return {
			...meta,
			url: `/blog${fileName.substring(1).replace(/\.mdx$/, '')}`,
		}
	})
}

const dateSortDesc = (a: Meta, b: Meta): number => {
	if (a.date > b.date) return -1
	if (a.date < b.date) return 1
	return 0
}

export const allPosts = importAll(
	require.context('../pages/blog/', true, /\.mdx$/)
).sort(dateSortDesc)

export const latestPost = allPosts[0]
