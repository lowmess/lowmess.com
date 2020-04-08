import React from 'react'
import { Box, Container, Text } from 'theme-ui'

const List = (props) => (
  <Text sx={{ paddingLeft: 0, 'ul, ol': { marginY: 0 } }} {...props} />
)

const UnorderedList = (props) => (
  <Box>
    <Container sx={{ maxWidth: 'mdx-measure' }}>
      <List as="ul" {...props} />
    </Container>
  </Box>
)

const OrderedList = (props) => (
  <Box>
    <Container sx={{ maxWidth: 'mdx-measure' }}>
      <List as="ol" {...props} />
    </Container>
  </Box>
)

export { UnorderedList, OrderedList }
