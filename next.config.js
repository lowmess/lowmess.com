const withPrefresh = require('@prefresh/next')

const withTM = require('next-transpile-modules')([
  'react-children-utilities',
  'lowmess-prism',
])

const smartypants = require('@silvenon/remark-smartypants')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [smartypants],
  },
})

const nextConfig = {
  experimental: {
    modern: true,
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  webpack(config, { dev, isServer }) {
    // Move Preact into the framework chunk instead of duplicating in routes:
    const splitChunks = config.optimization && config.optimization.splitChunks

    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups

      const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/

      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, { test })
        // if you want to merge the 2 small commons+framework chunks:
        // cacheGroups.commons.name = 'framework';
      }
    }

    if (isServer) {
      // mark `preact` stuffs as external for server bundle to prevent duplicate copies of preact
      config.externals.push(
        /^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/
      )
    }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {})
    aliases.react = aliases['react-dom'] = 'preact/compat'

    // Automatically inject Preact DevTools:
    if (dev && !isServer) {
      const entry = config.entry

      config.entry = () =>
        entry().then((entries) => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])

          return entries
        })
    }

    return config
  },
}

module.exports = withPrefresh(withTM(withMDX(nextConfig)))
