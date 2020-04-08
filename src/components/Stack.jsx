import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Stack = ({
  gap = 0,
  dividers,
  dividerColor = 'muted',
  children,
  ...props
}) => {
  const items = React.Children.toArray(children)

  return (
    <Box {...props}>
      {items.map((child, index) => (
        <Box
          key={index}
          sx={{
            '& + &': {
              marginTop: gap,
              borderTop: dividers ? 1 : 0,
              borderColor: dividerColor,
              paddingTop: dividers ? gap : 0,
            },
          }}
        >
          {child}
        </Box>
      ))}
    </Box>
  )
}

Stack.propTypes = {
  gap: PropTypes.number,
  dividers: PropTypes.bool,
  dividerColor: PropTypes.string,
  children: PropTypes.node,
}

export default Stack
