import React from 'react'
import PropTypes from 'prop-types'
import GithubSlugger from 'github-slugger'
import { Container, Heading, Link } from 'theme-ui'

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-link"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
)

const AutolinkHeading = ({ sx, children, ...props }) => {
  const slugger = new GithubSlugger()

  const slug = slugger.slug(children)

  return (
    <Container sx={{ maxWidth: 'mdx-measure' }}>
      <Heading
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'baseline',
          ...sx,

          a: {
            visibility: 'hidden',
            position: 'absolute',
            right: '100%',
            paddingX: 2,
            color: 'muted-text',
          },

          '&:hover a': {
            visibility: 'visible',
          },
        }}
        {...props}
      >
        <Link variant="ui" href={`#${slug}`}>
          <LinkIcon />
        </Link>

        {children}
      </Heading>
    </Container>
  )
}

AutolinkHeading.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
}

const h1 = (props) => {
  if (process.NODE_ENV !== 'production')
    return (
      <Heading
        as="h1"
        sx={{ fontSize: '6rem !important', color: 'red', textAlign: 'center' }}
      >
        Don&rsquo;t use h1s
      </Heading>
    )

  return ''
}

const h2 = (props) => <AutolinkHeading as="h2" mt={[4, 5]} {...props} />

const h3 = (props) => (
  <AutolinkHeading as="h3" sx={{ fontSize: [1, 2] }} {...props} />
)

const h4 = (props) => (
  <AutolinkHeading as="h4" variant="section-heading" {...props} />
)

const h5 = (props) => (
  <AutolinkHeading as="h5" variant="section-heading" {...props} />
)

const h6 = (props) => (
  <AutolinkHeading as="h6" variant="section-heading" {...props} />
)

export { h1, h2, h3, h4, h5, h6 }
