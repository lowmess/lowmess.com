import * as React from 'react'
import { Box, Flex } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface Props extends ThemeUIProps {
  gap?: number
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
