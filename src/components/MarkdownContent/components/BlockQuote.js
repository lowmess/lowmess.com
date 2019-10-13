import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { verticalRhythm, blockShape } from '../markdownStyles'

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

export default BlockQuote
