import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import babili from 'rollup-plugin-babili'

let plugs = [
  babel(),
  resolve({
    jsnext: true
  })
]

if (process.env.NODE_ENV === 'production') {
  plugs.push(babili({ comments: false }))
}

export default {
  entry: './js/main.js',
  dest: './_build/js/main.js',
  format: 'es',
  plugins: plugs
}
