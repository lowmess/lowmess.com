import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { Box } from 'rebass'

const MarkdownContent = ({ children, ...props }) => (
  <MDXProvider>
    <Box
      sx={{
        // Vertical rhythm
        '& > *': {
          // reset all margins
          marginY: 0,

          // margin top to all child elements
          '& + *': {
            marginTop: 3,
          },

          // bigger margin top on headers
          '& + h1, & + h2': {
            marginTop: 5,
          },
          '& + h3, & + h4': {
            marginTop: 4,
          },
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
