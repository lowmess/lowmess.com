import React from 'react'
import PropTypes from 'prop-types'
import { Link as L } from 'rebass'

const Link = ({ children, ...props }) => (
  <L
    sx={{
      '&:hover code': {
        color: 'orange',
      },

      '@media print': {
        '&:after': {
          content: `' (' attr(href) ')'`,
          fontSize: '0.875em',
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
  >
    {children}
  </L>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Link
