import React from 'react'
import PropTypes from 'prop-types'
import GithubSlugger from 'github-slugger'
import { Heading, Link } from 'rebass'

const LinkIcon = () => (
  <svg
    viewBox="0 0 32 32"
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.04 16A4.966 4.966 0 0 1 8 11.04h6.4V8H8c-4.415 0-8 3.584-8 8s3.585 8 8 8h6.4v-3.04H8A4.966 4.966 0 0 1 3.04 16zm6.56 1.6h12.8v-3.2H9.6v3.2zM24 8h-6.4v3.04H24A4.966 4.966 0 0 1 28.96 16 4.966 4.966 0 0 1 24 20.96h-6.4V24H24c4.415 0 8-3.584 8-8s-3.585-8-8-8z" />
  </svg>
)

const AutolinkHeading = ({ children, ...props }) => {
  const slugger = new GithubSlugger()

  const slug = slugger.slug(children)

  return (
    <Heading
      id={slug}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',

        '.heading-link': {
          visibility: 'hidden',
          position: 'absolute',
          right: '100%',
          paddingX: 2,
        },

        '.heading-link:hover': {
          color: 'orange',
        },

        '&:hover .heading-link': {
          visibility: 'visible',
        },
      }}
      {...props}
    >
      <Link href={`#${slug}`} className="heading-link">
        <LinkIcon />
      </Link>

      {children}
    </Heading>
  )
}

AutolinkHeading.propTypes = {
  children: PropTypes.node.isRequired,
}

const One = props => (
  <AutolinkHeading
    as="h1"
    mt={4}
    pt={4}
    fontSize={[3, 4]}
    fontWeight="semi-bold"
    {...props}
  />
)

const Two = props => (
  <AutolinkHeading
    as="h2"
    mt={4}
    pt={4}
    fontSize={[2, 3]}
    fontWeight="semi-bold"
    {...props}
  />
)

const Three = props => (
  <AutolinkHeading
    as="h3"
    mt={3}
    pt={3}
    fontSize={[1, 2]}
    fontWeight="semi-bold"
    {...props}
  />
)

const Four = props => (
  <AutolinkHeading
    as="h4"
    mt={3}
    pt={3}
    fontSize={[1, 2]}
    fontWeight="medium"
    {...props}
  />
)

const Five = props => (
  <AutolinkHeading
    as="h5"
    pt={3}
    fontSize={[1, 2]}
    fontWeight="medium"
    {...props}
  />
)

const Six = props => (
  <AutolinkHeading
    as="h6"
    pt={3}
    fontSize={[1, 2]}
    fontWeight="medium"
    {...props}
  />
)

export { One, Two, Three, Four, Five, Six }
