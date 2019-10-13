import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { Box } from 'rebass'
import components from './components'
import { verticalRhythm } from './markdownStyles'

const MarkdownContent = ({ children, ...props }) => (
  <MDXProvider components={components}>
    <Box
      sx={{
        ...verticalRhythm,

        'b, strong, em, small, code': {
          lineHeight: 'solid',
        },

        'sup, sub': {
          verticalAlign: 'baseline',
          position: 'relative',
          top: '-0.4em',
        },

        sub: {
          top: '0.4em',
        },

        iframe: {
          marginY: 4,
          border: 1,
          borderColor: 'grays.2',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  </MDXProvider>
)

MarkdownContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownContent
