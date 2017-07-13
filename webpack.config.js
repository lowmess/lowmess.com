const path = require('path')
const webpack = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin')

const maps = process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-eval-source-map'
const plugs = []

if (process.env.NODE_ENV === 'production') {
  plugs.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new BabiliPlugin({ mangle: false }, { comments: false })
  )
}

module.exports = {
  context: __dirname,
  entry: './js/main.js',
  output: {
    path: path.join(__dirname, '_build/js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: maps,
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: plugs,
}
