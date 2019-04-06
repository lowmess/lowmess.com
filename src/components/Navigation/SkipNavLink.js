import React from 'react'
import { css } from 'styled-components'
import { Text } from 'rebass'
import { themeHover } from '../../utils/styles'

const SkipNavLink = () => {
  const styles = css`
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

  // `<Link>` extends `<Box>` instead of `<Link>` for some reason, so the link
  // has to be a `<Text>` instead. i opened a PR to hopefully make this cleaner.
  //
  // @link https://github.com/rebassjs/rebass/pull/582
  return (
    <Text
      as="a"
      href="#main-content"
      fontSize={[0, 1]}
      fontFamily="monospace"
      css={styles}
    >
      Skip to main content
    </Text>
  )
}

export default SkipNavLink
