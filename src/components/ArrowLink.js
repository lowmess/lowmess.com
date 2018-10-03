import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  fontWeight,
  fontFamily,
  hover,
} from 'styled-system'
import Icon from './Icon'

const Text = styled.span`
  display: inline-flex;
  align-items: center;
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${fontFamily};
  ${hover};
`

const ArrowLink = ({ dest, children, external, ...props }) => {
  return external ? (
    <a href={dest}>
      <Text
        fontFamily="monospace"
        color="darkGrey"
        hover={{ color: 'orange' }}
        fontSize={[0, 1]}
        {...props}
      >
        {children} <Icon glyph="arrow" />
      </Text>
    </a>
  ) : (
    <Link to={dest}>
      <Text
        fontFamily="monospace"
        color="darkGrey"
        hover={{ color: 'orange' }}
        fontSize={[0, 1]}
        {...props}
      >
        {children} <Icon glyph="arrow" />
      </Text>
    </Link>
  )
}

export default ArrowLink
