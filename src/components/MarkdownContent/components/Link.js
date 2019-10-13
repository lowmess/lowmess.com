import React from 'react'
import PropTypes from 'prop-types'
import { Link as L } from 'rebass'

const Link = ({ children, ...props }) => (
  <L variant="link" {...props}>
    {children}
  </L>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Link
