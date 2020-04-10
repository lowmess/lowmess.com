import React from 'react'
import { Link as ThemeUILink } from 'theme-ui'

const Link = (props) => (
  <ThemeUILink
    sx={{
      '&:hover code': {
        color: 'primary',
      },

      '@media print': {
        '&:after': {
          content: `' (' attr(href) ')'`,
          fontSize: 1,
        },

        "&[href^='/']:after": {
          content: `' (https://lowmess.com' attr(href) ')'`,
        },

        "&[href^='#']": {
          textDecoration: 'none',

          '&:after': {
            content: `''`,
          },
        },
      },
    }}
    {...props}
  />
)

export default Link
