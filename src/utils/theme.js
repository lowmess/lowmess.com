const breakpoints = ['48em', '64em']

const colors = {
  black: '#2a2722',
  nearBlack: '#39342d',
  darkGrey: '#443e35',
  grey: '#efedea',
  nearWhite: '#f9f9f8',
  white: '#fff',
  transparent: 'transparent',
  orange: '#f2930d',
}

// Box-sizing & borders
const space = [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem']
const borders = [
  0,
  '0.125rem solid',
  '0.25rem solid',
  '0.5rem solid',
  '1rem solid',
  '2rem solid',
]
const radii = [0, '0.125rem', '0.25rem', '0.5rem', '1rem', '100%']

// Typography
const fontSizes = [
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2.25rem',
  '3rem',
  '5rem',
  '6rem',
]
const lineHeights = {
  title: 1.25,
  copy: 1.5,
}
const fontWeights = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  6: '600',
  7: '700',
  normal: '400',
  bold: '700',
}
const fonts = {
  'sans-serif':
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace:
    '"SF Mono", SFMono-Regular, "Roboto Mono", consolas, monaco, courier, "Courier New", monospace',
}

const theme = {
  breakpoints,
  space,
  fontSizes,
  borders,
  radii,
  fonts,
  lineHeights,
  fontWeights,
  colors,
}

export default theme
