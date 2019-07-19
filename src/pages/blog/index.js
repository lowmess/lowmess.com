import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Box, Flex, Heading } from 'rebass'
import Header from '../../components/Header'
import ArrowLink from '../../components/ArrowLink'
import { Title, Paragraph } from '../../components/Typography'
import { useSiteMetadata } from '../../utils/hooks'
import { themeHover } from '../../utils/styles'
import unwidow from '../../utils/unwidow'

const YearContainer = styled(Box)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    display: block;
  }
`

const YearTitle = ({ children }) => (
  <Heading fontSize={[2, 3]} fontWeight="medium">
    {children}
  </Heading>
)

YearTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

const PostTitle = ({ children }) => (
  <Heading
    as="h3"
    fontSize={[2, 3]}
    lineHeight="title"
    css="display: inline-block"
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
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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

  const posts = data.allMarkdownRemark.edges
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
                    <Link to={fields.slug} css={themeHover}>
                      {unwidow(frontmatter.title)}
                    </Link>
                  </PostTitle>

                  <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
                    {unwidow(frontmatter.description)}
                  </Paragraph>

                  <ArrowLink dest={fields.slug}>Read More</ArrowLink>
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
