import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Text } from './Primitives'

const Stat = ({ children, ...props }) => (
  <Flex alignItems="baseline" flexDirection={['column', 'row']} {...props}>
    {children}
  </Flex>
)

Stat.propTypes = {
  children: PropTypes.node.isRequired,
}

const StatTitle = ({ children }) => (
  <Box width={[1, 1 / 3, 1 / 4]} mb={[1, 0]}>
    <Text fontSize={[2, 3]} fontWeight={5} lineHeight="copy">
      {children}
    </Text>
  </Box>
)

StatTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

const StatValue = ({ children }) => (
  <Box width={[1, 2 / 3, 3 / 4]}>
    <Text fontFamily="monospace" fontSize={[1, 2]} lineHeight="copy">
      {children}
    </Text>
  </Box>
)

StatValue.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
}

export { Stat, StatTitle, StatValue }
