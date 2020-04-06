import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'theme-ui'

const Inline = ({ gap = 0, sx, children, ...props }) => {
  const items = React.Children.toArray(children)

  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        marginRight: -gap,
        marginBottom: -gap,
        ...sx,
      }}
      {...props}
    >
      {items.map((child, index) => (
        <Box
          key={index}
          sx={{
            display: 'inline-block',
            marginRight: gap,
            marginBottom: gap,
          }}
        >
          {child}
        </Box>
      ))}
    </Flex>
  )
}

Inline.propTypes = {
  gap: PropTypes.number,
  sx: PropTypes.object,
  children: PropTypes.node,
}

export default Inline
