import { css } from '@emotion/core'
// weirdly, can't figure out a way to make dynamic/themed styling work with
// emotion style composition ¯\_(ツ)_/¯
import theme from '../layouts/theme'

const themeHover = css`
  color: inherit;

  &:hover {
    color: ${theme.colors.orange};
  }
`

const themeUnderline = css`
  text-decoration: underline;
  text-decoration-color: ${theme.colors.orange};
`

export { themeHover, themeUnderline }
