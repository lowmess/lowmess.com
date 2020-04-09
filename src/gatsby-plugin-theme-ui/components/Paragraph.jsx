import React from 'react'
import { Text, Container } from 'theme-ui'

const Paragraph = (props) => (
  <Container sx={{ maxWidth: 'mdx-measure' }}>
    <Text as="p" sx={{ fontSize: [null, null, '1.125rem'] }} {...props} />
  </Container>
)

export default Paragraph
