import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.black};
    line-height: ${({ theme }) => theme.lineHeights.copy};
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    @media print {
      background: none;
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.orange} !important;
    color: ${({ theme }) => theme.colors.black} !important;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
  }

  @media print {
    nav, footer {
      display: none !important;
    }

    #main-content {
      margin-bottom: 0 !important;
    }
  }
`

export default GlobalStyles
