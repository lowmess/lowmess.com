const fs = require('fs')
// Metalsmith
const Metalsmith = require('metalsmith')
const sitemap = require('metalsmith-mapsite')
const feed = require('metalsmith-feed')
const defaultValues = require('metalsmith-default-values')
// HTML
const layouts = require('metalsmith-layouts')
const drafts = require('metalsmith-drafts')
const markdown = require('metalsmith-markdownit')
const permalinks = require('metalsmith-permalinks')
const collections = require('metalsmith-collections')
const pagination = require('metalsmith-pagination')
const tags = require('metalsmith-tags')
const minify = require('metalsmith-html-minifier')
// Javascript
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const uglify = require('rollup-plugin-uglify')
// PostCSS
const postcss = require('postcss')

/* Metalsmith
 ******************************************************************************/

let siteBuild = Metalsmith(__dirname)
  .source('source')
  .destination('_build')
  .metadata({
    site: {
      url: 'https://www.lowmess.com/',
      title: 'lowmess',
      description: 'The web & graphic design portfolio of Alec Lomas. You can find him @lowmess'
    }
  })
  // HTML
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
  // Set default values
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
  .use(pagination({
    'collections.blog': {
      perPage: 10,
      layout: 'blog.pug',
      first: 'blog/index.html',
      noPageOne: true,
      path: 'blog/page/:num/index.html',
      pageMetadata: {
        title: 'Blog',
        headline: 'Adventures in Gardening',
        description: 'The Phenotonic Blog'
      }
    }
  }))
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
    pretty: true,
    moment: require('moment'),
    directory: 'templates',
    default: 'default.pug',
    pattern: '**/*.html'
  }))
  .use(sitemap('https://lowmess.com'))
  .use(feed({collection: 'blog'}))

if (process.env.NODE_ENV === 'production') {
  siteBuild.use(minify())
}

siteBuild.build(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Metalsmith complete!\n')
    scripts()
    stylesheets()
  }
})

/* Rollup
 ******************************************************************************/

function scripts () {
  let plugs = [
    babel(),
    nodeResolve({
      jsnext: true
    })
  ]

  if (process.env.NODE_ENV === 'production') {
    plugs.push(
      uglify()
    )
  }

  rollup.rollup({
    entry: 'js/main.js',
    plugins: plugs
  }).then(function (bundle) {
    bundle.write({
      format: 'es',
      dest: '_build/js/main.js',
      sourceMap: true
    })
  })

  console.log('Rollup complete!\n')
}

/* PostCSS
 ******************************************************************************/

function stylesheets () {
  let css = fs.readFileSync('css/main.css', 'utf-8')

  let plugins = [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-extend'),
    require('postcss-custom-properties'),
    require('postcss-custom-media'),
    require('postcss-color-function'),
    require('postcss-focus'),
    require('autoprefixer')({
      browsers: ['last 2 versions', '> 5%']
    })
  ]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      require('postcss-uncss')({
        html: ['_build/**/*.html']
      }),
      require('css-mqpacker'),
      require('cssnano')
    )
  }

  postcss(plugins)
    .process(css, {
      from: 'css/main.css',
      to: '_build/css/main.css',
      map: { inline: false }
    })
    .then(function (result) {
      if (result.warnings()) {
        result.warnings().forEach(warn => {
          console.warn(warn.toString())
        })
      }
      fs.mkdirSync('_build/css')
      fs.writeFileSync('_build/css/main.css', result.css, 'utf-8')
      if (result.map) fs.writeFileSync('_build/css/main.css.map', result.map, 'utf-8')

      console.log('PostCSS complete!\n')
    })
}
