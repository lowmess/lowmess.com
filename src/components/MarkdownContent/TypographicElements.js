import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'
import { verticalRhythm, measure, blockShape } from './markdownStyles'

const Paragraph = ({ children }) => (
  <Text
    as="p"
    sx={{
      ...measure,
      marginTop: 3,
      // Wider images:
      ...(children.props &&
        children.props.className.includes('image') && {
          maxWidth: '48rem',
        }),
    }}
  >
    {children}
  </Text>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

const BlockQuote = ({ children }) => (
  <Box
    as="blockquote"
    sx={{
      ...verticalRhythm,
      ...blockShape,

      marginY: 4,
      marginX: 0,
      backgroundColor: 'grays.1',

      p: {
        maxWidth: '30em',
      },

      cite: {
        display: 'block',
      },

      'cite::before': {
        content: `'\u2015'`,
        marginRight: 1,
      },

      '> :first-child': {
        marginTop: 0,
      },
      '> :last-child': {
        marginBottom: 0,
      },
    }}
  >
    {children}
  </Box>
)

BlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
}

const HorizontalRule = () => (
  <Box
    as="hr"
    sx={{
      maxWidth: '4rem',
      height: '0.25rem',
      marginY: 4,
      marginX: 0,
      border: 0,
      backgroundColor: 'orange',
    }}
  />
)

export { Paragraph, BlockQuote, HorizontalRule }
