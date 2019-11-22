import React from 'react'
import { useTheme } from 'emotion-theming'
import { Global, css } from '@emotion/core'

import 'sanitize.css'
import 'sanitize.css/typography.css'

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        html {
          background-color: ${theme.colors.orange};
          line-height: ${theme.lineHeights.copy};
          scroll-behavior: smooth;

          @media (prefers-reduced-motion: reduce) {
            scroll-behavior: auto;
          }

          @media print {
            background: none;
          }
        }

        ::selection {
          background-color: ${theme.colors.orange} !important;
          color: ${theme.colors.black} !important;
        }

        @media print {
          nav,
          footer {
            display: none !important;
          }

          #main-content {
            margin-bottom: 0 !important;
          }
        }
      `}
    />
  )
}

export default GlobalStyles
