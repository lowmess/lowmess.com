import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from './theme'

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
