const path = require('path')
const sitemap = require('nextjs-sitemap-generator')

const metadataPath = path.resolve(__dirname, '../src/constants/metadata.json')
const metadata = require(metadataPath)

sitemap({
	baseUrl: metadata.url,
	pagesDirectory: path.resolve(__dirname, '../src/pages'),
	targetDirectory: path.resolve(__dirname, '../public/'),
	ignoreIndexFiles: true,
})
