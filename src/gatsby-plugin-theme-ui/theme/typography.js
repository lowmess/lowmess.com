const fonts = {
  sans:
    'Inter, "Inter UI", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Oxygen, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  mono:
    '"Dank Mono", Dank, dm, Menlo, Consolas, Roboto Mono, Ubuntu Monospace, Oxygen Mono, Liberation Mono, monospace',
}

const fontSizes = [
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '3rem',
  '5rem',
  '6rem',
]

fontSizes.base = fontSizes[1]

const fontWeights = {
  thin: 100,
  'extra-light': 200,
  light: 300,
  normal: '400',
  medium: 500,
  'semi-bold': 600,
  bold: '700',
  'extra-bold': 800,
  black: 900,
}

const lineHeights = {
  solid: 1,
  heading: 1.25,
  copy: 1.5,
}

export { fonts, fontSizes, fontWeights, lineHeights }
