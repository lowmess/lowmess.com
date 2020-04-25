import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text, Container } from 'theme-ui'

const Update = ({ date, sx, children, ...props }) => (
  <Box bg="muted" my={5} py={4}>
    <Container sx={{ maxWidth: 'mdx-measure', ...sx }} {...props}>
      {date && (
        <Text variant="section-heading" mb={3}>
          Update ({date})
        </Text>
      )}

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
