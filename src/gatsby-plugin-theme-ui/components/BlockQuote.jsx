import React from 'react'
import { Box, Container } from 'theme-ui'

const BlockQuote = (props) => (
  <Container sx={{ maxWidth: 'mdx-measure' }}>
    <Box
      as="blockquote"
      sx={{
        position: 'relative',

        '&::before': {
          content: 'open-quote',
          position: 'absolute',
          top: -3,
          right: '100%',
          marginRight: 2,
          color: 'muted-text',
          fontSize: 5,
        },

        div: {
          display: 'contents',
        },

        p: {
          fontSize: [2, 3],
          fontWeight: 'semi-bold',
          lineHeight: 'heading',
        },

        cite: {
          display: 'inline-block',
          marginTop: 2,
          fontStyle: 'italic',

          '&::before': {
            content: '"\u2015"',
            marginRight: 2,
          },
        },
      }}
      {...props}
    />
  </Container>
)

export default BlockQuote
