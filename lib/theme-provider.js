const React = require('react')
const ThemeProvider = require('styled-components').ThemeProvider
const theme = require('./theme')

module.exports = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
