import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { Rule } from '../Typography'
import { blockShape } from './markdownStyles'

const ThematicBreak = () => <Rule />

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

export { ThematicBreak, BlockQuote }
