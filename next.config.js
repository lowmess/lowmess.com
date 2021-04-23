const { format, addMinutes } = require('date-fns')

const withTM = require('next-transpile-modules')([
	'react-children-utilities',
	'lowmess-prism',
])

const smartypants = require('@silvenon/remark-smartypants')

const withMDX = require('next-mdx-enhanced')({
	layoutPath: 'src/layouts',
	defaultLayout: true,
	usesSrc: true,
	remarkPlugins: [smartypants],
	extendFrontMatter: {
		process: (_, frontMatter) => {
			const { date, __resourcePath } = frontMatter

			const datetime = date.toISOString()
			const year = date.getFullYear()
			const offset = date.getTimezoneOffset()

			const url = `/${__resourcePath.replace(/\.mdx?$/, '')}`

			const slug = url.split('/').pop()

			return {
				datetime,
				date: format(addMinutes(frontMatter.date, offset), 'MMMM d, yyyy'),
				year,
				url,
				slug,
			}
		},
	},
})

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

module.exports = withTM(withMDX(nextConfig))
