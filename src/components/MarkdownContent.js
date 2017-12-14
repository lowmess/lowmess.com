import React from 'react'
import styled from 'react-emotion'
import { Box } from './Layout'

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

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}em) {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}em) {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}em) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  }

  h4,
  h5,
  h6 {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    font-weight: 500;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}em) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  }

  /* Type Elements */

  hr {
    width: 100%;
    max-width: 4rem;
    margin-left: 0;
    margin-right: 0;
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    border-color: ${({ theme }) => theme.colors.orange};
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
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;
    text-decoration-skip: ink;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }

    @media print {
      &:after {
        content: ' (' attr(href) ')';
        font-size: 0.875em;
      }
    }
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    border-left: ${({ theme }) => theme.borderWidths[3]} solid ${({ theme }) => theme.colors.orange};
    border-radius: ${({ theme }) => theme.radii[1]};
    padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
    background-color: ${({ theme }) => theme.colors.nearWhite};

    p {
      max-width: 30em;
    }
  }

  code {
    font-family: ${({ theme }) => theme.typeface.monospace};
  }

  p code,
  li code {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.radii[1]};
    padding-left: ${({ theme }) => theme.space[1]};
    padding-right: ${({ theme }) => theme.space[1]};
    background-color: ${({ theme }) => theme.colors.nearWhite};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    white-space: nowrap;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}em) {
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }
  }

  pre {
    width: 100%;
    overflow-x: scroll;
    border-left: ${({ theme }) => theme.borderWidths[3]} solid ${({ theme }) => theme.colors.orange};
    border-radius: ${({ theme }) => theme.radii[1]};
    padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.nearWhite};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-family: ${({ theme }) => theme.typeface.monospace};
    white-space: pre;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}em) {
      font-size: ${({ theme }) => theme.fontSizes[1]};
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
`

export default MarkdownContent
