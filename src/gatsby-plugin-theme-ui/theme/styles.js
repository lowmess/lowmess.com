export default {
  root: {
    fontSize: 'base',
    fontFamily: 'sans',
    lineHeight: 'copy',
  },

  a: {
    color: 'text',
    textDecoration: 'underline',
    textDecorationColor: (theme) => theme.colors.primary,

    '&:hover': {
      color: 'primary',
    },
  },
}
