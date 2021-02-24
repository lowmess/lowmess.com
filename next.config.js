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
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

module.exports = withTM(withMDX(nextConfig))
