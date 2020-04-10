export default {
  nav: {
    borderBottom: 2,
    borderColor: 'transparent',
    padding: 2,
    fontSize: [1, 2],
    fontWeight: 'normal',

    '&:hover': {
      borderColor: 'muted',
      color: 'text',
    },

    '&:focus': {
      color: 'text',
    },

    '&[data-active]': {
      borderColor: 'primary',
    },
  },

  ui: {
    color: 'text',
    textDecoration: 'none',

    '&:hover': {
      color: 'primary',
    },
  },
}
