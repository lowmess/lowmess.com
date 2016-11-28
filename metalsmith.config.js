const Metalsmith = require('metalsmith')
const sitemap = require('metalsmith-mapsite')
const feed = require('metalsmith-feed')
const defaultValues = require('metalsmith-default-values')
const layouts = require('metalsmith-layouts')
const drafts = require('metalsmith-drafts')
const markdown = require('metalsmith-markdownit')
const permalinks = require('metalsmith-permalinks')
const collections = require('metalsmith-collections')
const tags = require('metalsmith-tags')
const minify = require('metalsmith-html-minifier')

Metalsmith(__dirname)
  .source('source')
  .destination('_build')
  .metadata({
    site: {
      url: 'https://www.lowmess.com/',
      title: 'lowmess',
      description: 'The web & graphic design portfolio of Alec Lomas. You can find him @lowmess'
    }
  })
  .use(drafts())
  .use(collections({
    blog: {
      pattern: 'blog/**/*.md',
      sortBy: 'date',
      reverse: true
    },
    projects: {
      pattern: 'projects/**/*.md',
      sortBy: 'date',
      reverse: true
    },
    pages: {
      pattern: '*.md'
    }
  }))
  .use(defaultValues([
    {
      pattern: 'projects/**/*.md',
      defaults: {
        layout: 'project.pug'
      }
    },
    {
      pattern: 'blog/**/*.md',
      defaults: {
        layout: 'post.pug'
      }
    }
  ]))
  .use(markdown({
    typographer: true,
    linkify: true
  }).use(
    require('markdown-it-block-image')
  ).use(
    require('markdown-it-prism')
  ).use(
    require('markdown-it-image-defer')
  ))
  .use(permalinks({
    pattern: ':collection/:title',
    relative: false,
    linksets: [{
      match: { collection: 'pages' },
      pattern: ':title'
    }]
  }))
  .use(tags({
    handle: 'tags',
    path: 'tagged/:tag/index.html',
    layout: 'tag.pug',
    sortBy: 'date',
    reverse: true
  }))
  .use(layouts({
    engine: 'pug',
    moment: require('moment'),
    directory: 'templates',
    default: 'default.pug',
    pattern: '**/*.html'
  }))
  .use(sitemap('https://lowmess.com'))
  .use(feed({collection: 'blog'}))
  .use(minify())
  .build(function (err) {
    if (err) {
      console.log(err)
    }
  })
