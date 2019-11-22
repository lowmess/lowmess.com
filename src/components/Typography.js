import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

const List = ({ sx, children, ...props }) => (
  <Text
    as="ul"
    sx={{
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Text>
)

List.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const ListItem = ({ children, ...props }) => (
  <Text as="li" {...props}>
    {children}
  </Text>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export { List, ListItem }
