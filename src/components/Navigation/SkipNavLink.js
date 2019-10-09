import styled from '@emotion/styled'
import { Link } from 'rebass'
import { themeHover } from '../../utils/styles'

const SkipNavLink = styled(Link)`
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

  ${themeHover};
`

SkipNavLink.defaultProps = {
  href: '#main-content',
  fontSize: [0, 1],
  fontFamily: 'monospace',
  children: 'Skip to main content',
}

export default SkipNavLink
