type FrontMatter = {
	title: string
	description: string
	datetime: string
	date: string
	year: number
	url: string
	slug: string
}

declare module '*.mdx' {
	export const frontMatter: FrontMatter[]
}
