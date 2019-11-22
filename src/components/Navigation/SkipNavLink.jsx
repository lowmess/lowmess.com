import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'rebass'

const SkipNavLink = ({ sx, children, ...props }) => (
  <Link
    variant="ui-link"
    sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
      backgroundColor: 'white',
      fontFamily: 'monospace',
      fontSize: [0, 1],
      opacity: 0,
      pointerEvents: 'none',
      transition: 'opacity 0.3s ease',

      '&:focus': {
        pointerEvents: 'auto',
        opacity: 1,
      },

      ...sx,
    }}
    {...props}
  >
    {children}
  </Link>
)

SkipNavLink.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
}

SkipNavLink.defaultProps = {
  href: '#main-content',
  children: 'Skip to main content',
}

export default SkipNavLink
