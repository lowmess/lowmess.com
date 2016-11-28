import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: './js/main.js',
  dest: './_build/js/main.js',
  format: 'es',
  plugins: [
    babel(),
    resolve({
      jsnext: true
    }),
    uglify()
  ]
}
