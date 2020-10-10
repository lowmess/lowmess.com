const smartypants = require('@silvenon/remark-smartypants')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [smartypants],
  },
})

const withTM = require('next-transpile-modules')([
  'react-children-utilities',
  'lowmess-prism',
])

module.exports = withTM(
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  })
)
