export default {
  root: {
    fontSize: 'base',
    fontFamily: 'sans',
    lineHeight: 'copy',
    textRendering: 'optimizeLegibility',
    // Not picked up by autoprefixer for some reason?
    '-webkit-font-smoothing': 'antialiased',
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
