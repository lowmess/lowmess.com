import React from 'react'
import { Box, Text, Container, Heading } from 'theme-ui'

interface HeaderComponent {
  as?: React.ElementType
}

const Header: React.FC = ({ children, ...props }) => (
  <Box as="header" {...props}>
    <Container>{children}</Container>
  </Box>
)

const HeaderName: React.FC<HeaderComponent> = (props) => (
  <Heading as="h1" variant="section-heading" mb={1} {...props} />
)

const HeaderTitle: React.FC<HeaderComponent> = (props) => (
  <Text variant="header-title" aria-hidden {...props} />
)

export { Header, HeaderName, HeaderTitle }
