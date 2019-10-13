import React from 'react'
import { Image as Img } from 'rebass'

const Image = props => (
  <Img
    sx={{
      display: 'block',
      width: '100%',
      maxWidth: '48rem',
      marginY: 4,
      borderRadius: 1,
    }}
    {...props}
  />
)

export { Image }
