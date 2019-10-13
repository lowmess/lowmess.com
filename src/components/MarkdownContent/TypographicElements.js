import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'
import { measure, blockShape } from './markdownStyles'

const Paragraph = ({ children }) => (
  <Text as="p" sx={{ ...measure, marginTop: 3 }}>
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
      ...blockShape,
      marginY: 4,
      marginX: 0,
      backgroundColor: 'grays.1',

      p: {
        maxWidth: '30em',
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
