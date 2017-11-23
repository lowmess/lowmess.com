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
      margin-top: ${props => props.theme.space[3]};
    }

    /* bigger margin top on headers */
    & + h1,
    & + h2 {
      margin-top: ${props => props.theme.space[5]};
    }

    & + h3,
    & + h4 {
      margin-top: ${props => props.theme.space[4]};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${props => props.theme.lineHeights.title};
  }

  p,
  ul,
  ol,
  address {
    max-width: 33em;
  }

  /* Headers */
  h1 {
    font-size: ${props => props.theme.fontSizes[4]};
    font-weight: 600;

    @media (${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[5]};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes[3]};
    font-weight: 600;

    @media (${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[4]};
    }
  }

  h3 {
    font-size: ${props => props.theme.fontSizes[2]};
    font-weight: 600;

    @media (${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[3]};
    }
  }

  h4,
  h5,
  h6 {
    font-size: ${props => props.theme.fontSizes[1]};
    font-weight: 500;

    @media (${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[2]};
    }
  }

  /* Type Elements */

  hr {
    width: 100%;
    max-width: 8rem;
    margin-left: 0;
    margin-right: 0;
    border-style: solid;
    border-width: ${props => props.theme.borderWidths[2]};
    border-color: ${props => props.theme.colors.orange};
    margin: ${props => props.theme.space[4]} 0;
  }

  ul,
  ol {
    padding-left: ${props => props.theme.space[4]};
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
    color: ${props => props.theme.colors.black};
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.colors.orange};
    }

    &:focus {
      outline: 1px dotted currentColor;
    }
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    border-left: ${props => props.theme.borderWidths[3]} solid ${props => props.theme.colors.orange};
    border-radius: ${props => props.theme.radii[1]};
    padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
    background-color: ${props => props.theme.colors.nearWhite};

    p {
      max-width: 30em;
    }
  }

  code {
    font-family: ${props => props.theme.typeface.monospace};
  }

  p code,
  li code {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.radii[1]};
    padding-left: ${props => props.theme.space[1]};
    padding-right: ${props => props.theme.space[1]};
    background-color: ${props => props.theme.colors.nearWhite};
    font-size: ${props => props.theme.fontSizes[0]};
    white-space: nowrap;

    @media (${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[1]};
    }
  }

  pre {
    width: 100%;
    overflow-x: scroll;
    border-left: ${props => props.theme.borderWidths[3]} solid ${props => props.theme.colors.orange};
    border-radius: ${props => props.theme.radii[1]};
    padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.nearWhite};
    font-size: ${props => props.theme.fontSizes[0]};
    font-family: ${props => props.theme.typeface.monospace};
    white-space: pre;

    @media (${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[1]};
    }
  }

  img {
    display: block;
    width: 100%;
    max-width: 48rem;
    margin-top: ${props => props.theme.space[4]};
    margin-bottom: ${props => props.theme.space[4]};
    border-radius: ${props => props.theme.radii[1]};
  }
`

export default MarkdownContent
