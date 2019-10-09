import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Box, Text, Heading as H } from 'rebass'

const Heading = ({ children, ...props }) => (
  <H variant="heading" {...props}>
    {children}
  </H>
)

Heading.propTypes = {
  children: PropTypes.node,
}

const Title = ({ children, ...props }) => (
  <Heading as="h1" mb={3} fontSize={[4, 5]} lineHeight="title" {...props}>
    {children}
  </Heading>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

const Subtitle = ({ children, ...props }) => (
  <Heading
    mt={3}
    mb={4}
    fontSize={[3, 4]}
    fontWeight="medium"
    lineHeight="title"
    {...props}
  >
    {children}
  </Heading>
)

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

const Paragraph = ({ children, ...props }) => (
  <Text
    as="p"
    fontSize={[1, 2]}
    lineHeight="copy"
    css={css`
      max-width: 33em;
    `}
    {...props}
  >
    {children}
  </Text>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

const Rule = styled(Box)`
  max-width: 8rem;
  height: ${({ theme }) => theme.space[2]};
  border: 0;
`

Rule.defaultProps = {
  as: 'hr',
  mx: 0,
  bg: 'orange',
}

const List = ({ children, ...props }) => (
  <Text
    as="ul"
    m={0}
    p={0}
    css={css`
      list-style-type: none;
    `}
    {...props}
  >
    {children}
  </Text>
)

List.propTypes = {
  children: PropTypes.node.isRequired,
}

const ListItem = ({ children, ...props }) => (
  <Text as="li" {...props}>
    {children}
  </Text>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Heading, Title, Subtitle, Paragraph, Rule, List, ListItem }
