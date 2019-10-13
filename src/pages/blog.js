import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Flex, Link } from 'rebass'
import Header from '../components/Header'
import ArrowLink from '../components/ArrowLink'
import { Heading, Title, Paragraph } from '../components/Typography'
import { useSiteMetadata } from '../utils/hooks'
import unwidow from '../utils/unwidow'

const YearContainer = ({ children, ...props }) => (
  <Box sx={{ display: ['none', 'block'] }} {...props}>
    {children}
  </Box>
)

YearContainer.propTypes = {
  children: PropTypes.node,
}

const YearTitle = ({ children }) => (
  <Heading fontSize={[2, 3]} fontWeight="medium" lineHeight="title">
    {children}
  </Heading>
)

YearTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

const PostTitle = ({ children }) => (
  <Heading
    as="h3"
    sx={{
      display: 'inline-block',
      fontSize: [2, 3],
      lineHeight: 'title',
    }}
  >
    {children}
  </Heading>
)

PostTitle.propTypes = {
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
          <Title>Eloquent Writings About&nbsp;Stuff</Title>
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
                    <Link as={GatsbyLink} to={fields.slug} variant="ui-link">
                      {unwidow(frontmatter.title)}
                    </Link>
                  </PostTitle>

                  <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
                    {unwidow(frontmatter.description)}
                  </Paragraph>

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
