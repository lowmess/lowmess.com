const palette = {
  orange: '#f2930d',
  oranges: [
    '#fdf2e1',
    '#fbe3c2',
    '#f9d49e',
    '#f7c276',
    '#f5ad47',
    '#f2930d',
    '#da840b',
    '#bf740a',
    '#9f6008',
    '#724506',
  ],

  black: '#2a2722',
  white: '#ffffff',
  grays: [
    '#ffffff',
    '#f9f9f8',
    '#efedea',
    '#e3e0db',
    '#d6d2cb',
    '#c9c2ba',
    '#b9b1a6',
    '#a89e90',
    '#938776',
    '#756a5b',
    '#443e35',
    '#39342d',
  ],
}

export default {
  black: palette.black,
  white: palette.white,
  grays: palette.grays,
  oranges: palette.oranges,

  text: palette.grays[10],
  background: palette.white,
  primary: palette.orange,
  secondary: palette.oranges[6],
  accent: palette.orange,
  highlight: palette.orange,
  muted: palette.grays[2],
  'muted-text': palette.grays[8],
  border: palette.grays[4],

  modes: {
    dark: {
      grays: [...palette.grays].reverse(),
      oranges: [...palette.oranges].reverse(),

      text: palette.grays[2],
      background: palette.grays[11],
      primary: palette.orange,
      secondary: palette.oranges[3],
      accent: palette.orange,
      highlight: palette.orange,
      muted: palette.black,
      'muted-text': palette.grays[8],
      border: palette.grays[8],
    },
  },
}
