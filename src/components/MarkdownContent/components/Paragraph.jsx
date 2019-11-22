import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'
import { measure } from '../markdownStyles'

const Paragraph = ({ children }) => (
  <Text
    variant="paragraph"
    as="p"
    sx={{
      ...measure,
      marginTop: 3,
      // Wider images:
      ...(children.props &&
        children.props.className.includes('image') && {
          maxWidth: '48rem',
        }),
    }}
  >
    {children}
  </Text>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paragraph
