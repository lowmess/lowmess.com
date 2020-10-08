import * as React from 'react'
import { Box } from 'theme-ui'

// TO-DO:
// Break out of container. gatsby-image is fucking this up

const Image: React.FC = (props) => <Box as="img" {...props} />

export default Image
