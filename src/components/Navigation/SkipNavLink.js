import React from 'react'
import { css } from 'styled-components'
import system from 'system-components'
import { themeHover } from '../../utils/styles'

const linkStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  &:focus {
    pointer-events: auto;
    opacity: 1;
  }
`

const LinkElement = system(
  {
    is: 'a',
    fontFamily: 'monospace',
    fontSize: [0, 1],
  },
  linkStyles,
  themeHover
)

const SkipNavLink = () => (
  <LinkElement href="#main-content">Skip to main content</LinkElement>
)

export default SkipNavLink
