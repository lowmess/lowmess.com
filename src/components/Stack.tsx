import * as React from 'react'
import { Box } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface Props extends ThemeUIProps {
  gap?: number
  dividers?: boolean
  dividerColor?: string
}

const Stack: React.FC<Props> = ({
  gap = 0,
  dividers,
  dividerColor = 'border',
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

export default Stack
