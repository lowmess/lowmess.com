import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

const Paragraph = ({ children, ...props }) => (
  <Text variant="paragraph" as="p" {...props}>
    {children}
  </Text>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paragraph
