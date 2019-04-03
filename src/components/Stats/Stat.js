import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Heading } from 'rebass'

const Stat = ({ children, ...props }) => (
  <Flex alignItems="baseline" flexDirection={['column', 'row']} {...props}>
    {children}
  </Flex>
)

Stat.propTypes = {
  children: PropTypes.node.isRequired,
}

const StatTitle = ({ children }) => (
  <Heading
    as="span"
    width={[1, 1 / 3, 1 / 4]}
    mb={[1, 0]}
    fontSize={[2, 3]}
    fontWeight={5}
    lineHeight="copy"
  >
    {children}
  </Heading>
)

StatTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

const StatValue = ({ children, ...props }) => (
  <Text
    as="span"
    width={[1, 2 / 3, 3 / 4]}
    fontFamily="monospace"
    fontSize={[1, 2]}
    lineHeight="copy"
    {...props}
  >
    {children}
  </Text>
)

StatValue.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Stat, StatTitle, StatValue }
