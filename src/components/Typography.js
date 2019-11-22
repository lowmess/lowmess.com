import React from 'react'
import PropTypes from 'prop-types'
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

const Paragraph = ({ sx, children, ...props }) => (
  <Text
    as="p"
    sx={{
      maxWidth: '33em',
      fontSize: [1, 2],
      lineHeight: 'copy',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Text>
)

Paragraph.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const Rule = ({ sx, ...props }) => (
  <Box
    as="hr"
    sx={{
      maxWidth: '8rem',
      height: '0.5rem',
      marginX: 0,
      border: 0,
      backgroundColor: 'orange',
      ...sx,
    }}
    {...props}
  />
)

Rule.propTypes = {
  sx: PropTypes.object,
}

const List = ({ sx, children, ...props }) => (
  <Text
    as="ul"
    sx={{
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Text>
)

List.propTypes = {
  sx: PropTypes.object,
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
