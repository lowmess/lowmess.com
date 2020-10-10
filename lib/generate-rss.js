// this is extremely gross, and t do not recommend anyone copy my work on this.
// but basically t was having trouble getting babel to resolve the imports in
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
const mdx = require('@mdx-js/mdx')

const glob = promisify(g)

const SITE_URL = 'https://www.lowmess.com'

const stringToObj = (str) => {
  // this will break the whole process if a title or a description has a curly
  // bracket in it lol. YOLO
  const removedCurlies = str.replace('{', '').replace('}', '').trim()
  const items = removedCurlies.split(/[,][\n]+?/g)

  const obj = {}

  items.forEach((item) => {
    const pieces = item.trim().split(': ')
    obj[pieces[0]] = pieces[1]
  })

  return obj
}

const extractMeta = (mdxPath) => {
  const mdxSrc = fs.readFileSync(mdxPath, { encoding: 'utf-8' })
  const jsx = mdx.sync(mdxSrc)

  // i would be nowhere without regexr.com
  const metaRegex = /^[export const meta][\s\S]+?[}]/m
  const metaCode = jsx.match(metaRegex)[0]
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

  const posts = postPaths.map(readPostMetadata)

  const feed = new RSS({
    title: "Alec's Cool Web Log :-)",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    language: 'en',
  })

  posts.forEach(({ link, meta }) => {
    feed.item({
      title: meta.title,
      guid: link,
      url: `${SITE_URL}${link}`,
      date: meta.date,
      description: meta.description,
    })
  })

  const rss = feed.xml({ indent: true })

  fs.writeFileSync(path.resolve(__dirname, '../out/rss.xml'), rss)
}

generateRSS()
