import * as React from 'react'
import { Box, Text, Container, Heading } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

const Header: React.FC = ({ children, ...props }) => (
  <Box as="header" {...props}>
    <Container>{children}</Container>
  </Box>
)

const HeaderName: React.FC<ThemeUIProps> = (props) => (
  <Heading as="h1" variant="section-heading" mb={1} {...props} />
)

const HeaderTitle: React.FC<ThemeUIProps> = (props) => (
  <Text variant="header-title" aria-hidden {...props} />
)

export { Header, HeaderName, HeaderTitle }
