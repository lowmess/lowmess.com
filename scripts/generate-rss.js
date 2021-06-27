const fs = require('fs')
const path = require('path')
const RSS = require('rss')
const globby = require('globby')

const metadataPath = path.resolve(__dirname, '../src/constants/metadata.json')
const metadata = require(metadataPath)

const dateSortDesc = (a, b) => {
	const date1 = new Date(a.date)
	const date2 = new Date(b.date)

	if (date1 > date2) return -1
	if (date1 < date2) return 1
	return 0
}

const META_RE = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/

const extractMeta = (source) => {
	const match = META_RE.exec(source)

	if (!match || typeof match[1] !== 'string') {
		throw new Error(`${name} needs to export const meta = {}`)
	}

	// eslint-disable-next-line no-eval
	const meta = eval(`(${match[1]})`)

	return meta
}

const generateRSS = async () => {
	const basePath = path.resolve(__dirname, '../src/pages/blog')
	const postPaths = await globby([`${basePath}/**/*.mdx`])

	const posts = postPaths
		.map((postPath) => {
			const contents = fs.readFileSync(postPath)
			const { title, description, date } = extractMeta(contents)

			const slug = postPath
				.split('/')
				.pop()
				.replace(/\.mdx?$/g, '')
			const link = `/blog/${slug}`

			return { link, title, description, date }
		})
		.sort(dateSortDesc)

	const feed = new RSS({
		title: "Alec's Cool Web Log :-)",
		site_url: metadata.url,
		feed_url: `${metadata.url}/rss.xml`,
		language: 'en',
	})

	posts.forEach(({ link, title, description, date }) => {
		feed.item({
			title,
			guid: link,
			url: `${metadata.url}${link}`,
			date,
			description,
		})
	})

	const rss = feed.xml({ indent: true })

	fs.writeFileSync(path.resolve(__dirname, '../public/rss.xml'), rss)
}

generateRSS()
