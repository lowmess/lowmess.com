// This file uses CommonJS because it is consumed by Gatsby APIs.
// It feels wrong, but also feels weird to have what is technically a component
// exist outside of the `src/` dir.

const React = require('react')
const PropTypes = require('prop-types')
const ThemeProvider = require('styled-components').ThemeProvider
const theme = require('./theme')

const ThemeWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

ThemeWrapper.propTypes = {
  element: PropTypes.object.isRequired,
}

module.exports = ThemeWrapper
