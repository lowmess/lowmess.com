import React from 'react'
import { Box, Flex, Text } from './Layout'

const Stat = ({ title, children, ...props }) => (
  <Flex align="baseline" flexDirection={['column', 'row']} {...props}>
    <Box width={[1, 1 / 3, 1 / 4]} mb={[1, 0]}>
      <Text fontSize={[2, 3]} fontWeight={5} lineHeight="copy">
        {title}
      </Text>
    </Box>
    <Box width={[1, 2 / 3, 3 / 4]}>
      <Text fontFamily="monospace" fontSize={[1, 2]} lineHeight="copy">
        {children}
      </Text>
    </Box>
  </Flex>
)

export default Stat
