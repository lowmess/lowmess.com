import React from 'react'
import { Box, Flex, Text } from './Primitives'

const Stat = ({ title, children, ...props }) => (
  <Flex align="baseline" flexDirection={['column', 'row']} {...props}>
    {children}
  </Flex>
)

const StatTitle = ({ children }) => (
  <Box width={[1, 1 / 3, 1 / 4]} mb={[1, 0]}>
    <Text fontSize={[2, 3]} fontWeight={5} lineHeight="copy">
      {children}
    </Text>
  </Box>
)

const StatValue = ({ children }) => (
  <Box width={[1, 2 / 3, 3 / 4]}>
    <Text fontFamily="monospace" fontSize={[1, 2]} lineHeight="copy">
      {children}
    </Text>
  </Box>
)

export { Stat, StatTitle, StatValue }
