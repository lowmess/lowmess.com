const plugs = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-custom-media'),
  require('postcss-focus'),
  require('autoprefixer'),
  require('cssnano'),
  require('css-mqpacker'),
]

if (process.env.NODE_ENV === 'production') {
  plugs.push(require('postcss-uncss')({ html: ['./_build/**/*.html'] }))
}

module.exports = {
  plugins: plugs,
  map: {
    inline: false,
  },
}
