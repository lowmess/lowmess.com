import * as React from 'react'
import { Box, Heading, Container } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface Props extends ThemeUIProps {
  date?: string
}

const Update: React.FC<Props> = ({ date, sx, children, ...props }) => (
  <Box bg="muted" my={5} py={4}>
    <Container sx={{ maxWidth: 'mdx-measure', ...sx }} {...props}>
      <Heading as="h2" variant="section-heading" mb={3}>
        Update {date && <span>({date})</span>}
      </Heading>

      <Box as="p" sx={{ fontSize: [3, null, 4] }}>
        {children}
      </Box>
    </Container>
  </Box>
)

export default Update
