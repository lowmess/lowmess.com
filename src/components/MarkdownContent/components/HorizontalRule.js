import React from 'react'
import { Box } from 'rebass'

const HorizontalRule = () => (
  <Box
    as="hr"
    sx={{
      maxWidth: theme => theme.space[5],
      height: theme => theme.space[1],
      marginY: 4,
      marginX: 0,
      border: 0,
      backgroundColor: 'orange',
    }}
  />
)

export default HorizontalRule
