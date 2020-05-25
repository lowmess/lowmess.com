import React from 'react'
import { Box, Flex, SxStyleProp } from 'theme-ui'
import { SpaceProps } from 'styled-system'

interface Props extends SpaceProps {
  gap?: number
  sx?: SxStyleProp
}

const Inline: React.FC<Props> = ({ gap = 0, sx, children, ...props }) => {
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

export default Inline
