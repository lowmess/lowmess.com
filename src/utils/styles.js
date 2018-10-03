import { css } from 'styled-components'

const textHover = css`
  color: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`

const themeUnderline = css`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.orange};
`

export { textHover, themeUnderline }
