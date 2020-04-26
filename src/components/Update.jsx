import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Container } from 'theme-ui'

const Update = ({ date, sx, children, ...props }) => (
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

Update.propTypes = {
  date: PropTypes.string,
  sx: PropTypes.object,
  children: PropTypes.node,
}

export default Update
