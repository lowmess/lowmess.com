const importAll = (r) => {
  return r.keys().map((fileName) => ({
    link: `/blog${fileName.substr(1).replace(/\/index\.mdx$/, '')}`,
    module: r(fileName),
  }))
}

const posts = importAll(
  require.context('../pages/blog/', true, /\.mdx$/)
).sort((a, b) => (a.module.meta.date > b.module.meta.date ? -1 : 1))

export default posts
