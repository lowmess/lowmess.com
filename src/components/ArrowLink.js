import React from 'react'
import Link from 'gatsby-link'
import { Text } from './Layout'
import Icon from './Icon'

const ArrowLink = ({ dest, text, external, ...props }) => {
  return external ? (
    <a href={dest}>
      <Text fontFamily="monospace" display="inline-flex" color="black" hover={{ color: 'orange' }} {...props}>
        {text} <Icon glyph="arrow" />
      </Text>
    </a>
  ) : (
    <Link to={dest}>
      <Text fontFamily="monospace" display="inline-flex" color="black" hover={{ color: 'orange' }} {...props}>
        {text} <Icon glyph="arrow" />
      </Text>
    </Link>
  )
}

export default ArrowLink
