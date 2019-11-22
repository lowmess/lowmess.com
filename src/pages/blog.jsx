import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Flex, Text, Heading, Link } from 'rebass'
import Header from '../components/Header'
import ArrowLink from '../components/ArrowLink'
import { useSiteMetadata } from '../utils/hooks'
import unwidow from '../utils/unwidow'

const YearContainer = ({ sx, children, ...props }) => (
  <Box sx={{ display: ['none', 'block'], ...sx }} {...props}>
    {children}
  </Box>
)

YearContainer.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
}

const YearTitle = ({ children, ...props }) => (
  <Heading fontSize={[2, 3]} fontWeight="medium" lineHeight="title" {...props}>
    {children}
  </Heading>
)

YearTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

const PostTitle = ({ sx, children, ...props }) => (
  <Heading
    as="h3"
    sx={{
      display: 'inline-block',
      fontSize: [2, 3],
      lineHeight: 'title',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Heading>
)

PostTitle.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const BlogPage = () => {
  const { title } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              description
              year: date(formatString: "YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges
  let year = '0'

  return (
    <>
      <Helmet>
        <title>Blog • {title}</title>
      </Helmet>

      <article>
        <Header>
          <Heading variant="title" as="h1">
            Eloquent Writings About&nbsp;Stuff
          </Heading>
        </Header>

        <main>
          {posts.map(({ node }, index) => {
            const { fields, frontmatter } = node
            const thisYear = frontmatter.year
            let YearComponent

            if (thisYear !== year) {
              YearComponent = <YearTitle>{frontmatter.year}</YearTitle>
              year = thisYear
            }

            return (
              <Flex
                key={fields.slug}
                flexDirection="row"
                alignItems="flex-start"
                {...(index + 1 === posts.length ? {} : { mb: [4, 5] })}
              >
                <YearContainer width={1 / 5}>{YearComponent}</YearContainer>

                <Box width={[1, 4 / 5]}>
                  <PostTitle>
                    <Link variant="ui-link" as={GatsbyLink} to={fields.slug}>
                      {unwidow(frontmatter.title)}
                    </Link>
                  </PostTitle>

                  <Text variant="paragraph" as="p" mt={3} mb={2}>
                    {unwidow(frontmatter.description)}
                  </Text>

                  <ArrowLink to={fields.slug}>Read More</ArrowLink>
                </Box>
              </Flex>
            )
          })}
        </main>
      </article>
    </>
  )
}

export default BlogPage
