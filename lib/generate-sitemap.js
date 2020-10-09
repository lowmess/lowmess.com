const path = require('path')
const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://lowmess.com',
  pagesDirectory: path.resolve(__dirname, '../src/pages'),
  targetDirectory: path.resolve(__dirname, '../out/'),
  ignoreIndexFiles: true,
})
