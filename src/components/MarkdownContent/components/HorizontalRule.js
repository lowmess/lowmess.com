import React from 'react'
import { Box } from 'rebass'

const HorizontalRule = () => (
  <Box
    as="hr"
    sx={{
      maxWidth: '4rem',
      height: '0.25rem',
      marginY: 4,
      marginX: 0,
      border: 0,
      backgroundColor: 'orange',
    }}
  />
)

export default HorizontalRule
