// this is extremely gross, and i do not recommend anyone copy my work on this.
// but basically i was having trouble getting babel to resolve the imports in
// mdx files, so i eschewed transpilation altogether and got nutty with it.
// basically instead of doing a destructure to get the `meta` object from my
// posts, i run some regex on the raw code to get the object as a string.
// then i manually convert that string to an object. like i said, gross.
//
// if anyone wants to get this working with babel, that would be v nice. :)

const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const RSS = require('rss')
const g = require('glob')

const glob = promisify(g)

const metadataPath = path.resolve(__dirname, '../src/constants/metadata.json')
const metadata = require(metadataPath)

const dateSortDesc = (a, b) => {
  const date1 = new Date(a.meta.date)
  const date2 = new Date(b.meta.date)

  if (date1 > date2) return -1
  if (date1 < date2) return 1
  return 0
}

const trimPunc = (str) => {
  const alphaOmega = /^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g

  return str.replace(alphaOmega, '')
}

const stringToObj = (str) => {
  const trimmed = trimPunc(str)
  const items = trimmed.split(/[,][\n]+/g)

  const obj = {}

  items.forEach((item) => {
    const pieces = item.split(/[:][\s]+/m)

    const key = trimPunc(pieces[0])
    let value = trimPunc(pieces[1])

    if (key === 'description') value += '.'

    obj[key] = value
  })

  return obj
}

const extractMeta = (mdxPath) => {
  const mdxSrc = fs.readFileSync(mdxPath, { encoding: 'utf-8' })

  // i would be nowhere without regexr.com
  const metaRegex = /^[export const meta][\s\S]+?[}]/m
  const metaCode = mdxSrc.match(metaRegex)[0]
  const metaRaw = metaCode.split(' = ')[1].trim()

  return stringToObj(metaRaw)
}

const readPostMetadata = (filePath) => {
  const meta = extractMeta(filePath)

  const basename = path.basename(filePath, '.mdx')

  return {
    link: `/blog/${basename}`,
    meta,
  }
}

const generateRSS = async () => {
  const basePath = path.resolve(__dirname, '../src/pages/blog')
  const postPaths = await glob(`${basePath}/**/*.mdx`)

  const posts = postPaths.map(readPostMetadata).sort(dateSortDesc)

  const feed = new RSS({
    title: "Alec's Cool Web Log :-)",
    site_url: metadata.url,
    feed_url: `${metadata.url}/rss.xml`,
    language: 'en',
  })

  posts.forEach(({ link, meta }) => {
    feed.item({
      title: meta.title,
      guid: link,
      url: `${metadata.url}${link}`,
      date: meta.date,
      description: meta.description,
    })
  })

  const rss = feed.xml({ indent: true })

  fs.writeFileSync(path.resolve(__dirname, '../out/rss.xml'), rss)
}

generateRSS()
