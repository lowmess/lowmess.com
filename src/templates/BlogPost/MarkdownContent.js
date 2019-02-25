import styled from 'styled-components'
import { Box } from '../../components/Primitives'

// this component basically exists as a giant stylesheet that inherits from the theme
// it's for markdown content (hence the name)
// it's kind of a b
const MarkdownContent = styled(Box)`
  /* Vertical Rhythm */
  & > * {
    /* reset all margins */
    margin-top: 0;
    margin-bottom: 0;

    /* margin top to all child elements */
    & + * {
      margin-top: ${({ theme }) => theme.space[3]};
    }

    /* bigger margin top on headers */
    & + h1,
    & + h2 {
      margin-top: ${({ theme }) => theme.space[5]};
    }

    & + h3,
    & + h4 {
      margin-top: ${({ theme }) => theme.space[4]};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${({ theme }) => theme.lineHeights.title};
  }

  p,
  ul,
  ol,
  address {
    max-width: 33em;
  }

  /* Headers */
  h1 {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  }

  h4,
  h5,
  h6 {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    font-weight: 500;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  }

  h1 code,
  h2 code,
  h3 code,
  h4 code,
  h5 code,
  h6 code {
    background-color: transparent;
    color: inherit;
  }

  /* Type Elements */

  hr {
    width: 100%;
    max-width: 4rem;
    margin-left: 0;
    margin-right: 0;
    border: ${({ theme }) => theme.borders[1]}
      ${({ theme }) => theme.colors.orange};
    margin: ${({ theme }) => theme.space[4]} 0;
  }

  ul,
  ol {
    padding-left: ${({ theme }) => theme.space[4]};
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  b,
  strong,
  em,
  small,
  code {
    line-height: 1;
  }

  sup,
  sub {
    vertical-align: baseline;
    position: relative;
    top: -0.4em;
  }

  sub {
    top: 0.4em;
  }

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.orange};

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }

    @media print {
      &:after {
        content: ' (' attr(href) ')';
        font-size: 0.875em;
      }
      &[href^='/']:after {
        content: ' (https://lowmess.com' attr(href) ')';
      }
      &[href^='#'] {
        text-decoration: none;

        &:after {
          content: '';
        }
      }
    }
  }

  blockquote,
  details {
    margin-top: ${({ theme }) => theme.space[4]};
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space[4]};
    margin-left: 0;
    border-left: ${({ theme }) => theme.borders[3]}
      ${({ theme }) => theme.colors.orange};
    border-radius: ${({ theme }) => theme.radii[1]};
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.nearWhite};

    p {
      max-width: 30em;
    }

    > :first-child {
      margin-top: 0;
    }
    > :last-child {
      margin-bottom: 0;
    }
  }

  code {
    font-family: ${({ theme }) => theme.fonts.monospace};
  }

  p code,
  li code {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.radii[1]};
    padding-left: ${({ theme }) => theme.space[1]};
    padding-right: ${({ theme }) => theme.space[1]};
    background-color: ${({ theme }) => theme.colors.nearWhite};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    white-space: nowrap;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }
  }

  pre {
    width: 100%;
    overflow-x: scroll;
    margin-top: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
    border-left: ${({ theme }) => theme.borders[3]}
      ${({ theme }) => theme.colors.orange};
    border-radius: ${({ theme }) => theme.radii[1]};
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.nearBlack};
    color: ${({ theme }) => theme.colors.nearWhite};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-family: ${({ theme }) => theme.fonts.monospace};
    white-space: pre;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }

    @media print {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }

  img {
    display: block;
    width: 100%;
    max-width: 48rem;
    margin-top: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
    border-radius: ${({ theme }) => theme.radii[1]};
  }

  iframe {
    margin-top: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }
`

export default MarkdownContent
