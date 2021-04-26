const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const matter = require('gray-matter')
const RSS = require('rss')
const g = require('glob')

const glob = promisify(g)

const metadataPath = path.resolve(__dirname, '../src/constants/metadata.json')
const metadata = require(metadataPath)

const dateSortDesc = (a, b) => {
	const date1 = new Date(a.date)
	const date2 = new Date(b.date)

	if (date1 > date2) return -1
	if (date1 < date2) return 1
	return 0
}

const generateRSS = async () => {
	const basePath = path.resolve(__dirname, '../src/pages/blog')
	const postPaths = await glob(`${basePath}/**/*.mdx`)

	const posts = postPaths
		.map((postPath) => {
			const contents = fs.readFileSync(postPath)
			const {
				data: { title, date, description },
			} = matter(contents)

			const slug = postPath
				.split('/')
				.pop()
				.replace(/\.mdx?$/g, '')
			const link = `/blog/${slug}`

			return { link, title, date, description }
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
			title: title,
			guid: link,
			url: `${metadata.url}${link}`,
			date: date,
			description: description,
		})
	})

	const rss = feed.xml({ indent: true })

	fs.writeFileSync(path.resolve(__dirname, '../public/rss.xml'), rss)
}

generateRSS()
