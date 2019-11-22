import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

const List = ({ children, ...props }) => (
  <Text
    sx={{
      marginTop: 3,
      paddingLeft: 4,

      '& ul, ol': {
        marginY: 0,
      },
    }}
    {...props}
  >
    {children}
  </Text>
)

List.propTypes = {
  children: PropTypes.node.isRequired,
}

const UnorderedList = ({ children }) => <List as="ul">{children}</List>

UnorderedList.propTypes = {
  children: PropTypes.node.isRequired,
}

const OrderedList = ({ children }) => <List as="ol">{children}</List>

OrderedList.propTypes = {
  children: PropTypes.node.isRequired,
}

export { UnorderedList, OrderedList }
