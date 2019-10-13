const plugins = [
  // Adding various source folders to the GraphQL layer.
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: `${__dirname}/src/data/`,
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/templates/BlogPost/BlogPost.js'),
      },
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1536,
            linkImagesToOriginal: false,
          },
        },
        { resolve: `gatsby-remark-copy-linked-files` },
        { resolve: `gatsby-remark-smartypants` },
        { resolve: `gatsby-remark-widows` },
      ],
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1536,
            linkImagesToOriginal: false,
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              })
            })
          },
          query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      fields { slug }
                      frontmatter {
                        title
                        description
                        date
                      }
                      body
                    }
                  }
                }
              }
            `,
          output: '/rss.xml',
          title: 'Alec Lomas • lowmess.com',
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'lowmess',
      short_name: 'lowmess',
      start_url: '/',
      background_color: '#f2930d',
      theme_color: '#f9f9f8',
      display: 'minimal-ui',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  'gatsby-transformer-json',
  'gatsby-transformer-sharp',
  'gatsby-plugin-catch-links',
  'gatsby-plugin-emotion',
  'gatsby-plugin-layout',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-remove-serviceworker',
  'gatsby-plugin-sharp',
  'gatsby-plugin-sitemap',
]

// The Fathom variables are set in Netlify's deploy settings.
// Seems better than storing them in plain text, as I was before.
if (
  process.env.FATHOM_URL &&
  process.env.FATHOM_ID &&
  process.env.USE_ANALYTICS
) {
  plugins.push({
    resolve: 'gatsby-plugin-fathom',
    options: {
      trackingUrl: process.env.FATHOM_URL,
      siteId: process.env.FATHOM_ID,
    },
  })
}

// Needs to be last plugin loaded
plugins.push('gatsby-plugin-netlify')

module.exports = {
  siteMetadata: {
    title: 'lowmess',
    description: 'oh, this ole thing? just my portfolio-slash-blog nbd',
    siteUrl: 'https://www.lowmess.com',
  },
  plugins,
}
