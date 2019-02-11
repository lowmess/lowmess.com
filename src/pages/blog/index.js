import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import system from 'system-components'
import Helmet from 'react-helmet'
import format from 'date-fns/format'
import addDays from 'date-fns/add_days'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import { Box, Flex, Text } from '../../components/Primitives'
import { Title, Paragraph } from '../../components/Typography'
import ArrowLink from '../../components/ArrowLink'
import { themeHover } from '../../utils/styles'

const YearTitle = ({ date }) => {
  const cleanDate = addDays(new Date(date), 1)
  return (
    <Text is="h2" fontSize={[2, 3]} fontWeight="5" mt={0}>
      {format(cleanDate, 'YYYY')}
    </Text>
  )
}

const PostTitle = system({
  is: 'h3',
  display: 'inline-block',
  fontSize: [2, 3],
  fontWeight: 7,
  lineHeight: 'title',
  my: 0,
})

const PostLink = styled(Link)`
  ${themeHover};
`

const BlogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
  let year = '0'
  return (
    <Layout location={location}>
      <Helmet>
        <title>Blog • {data.site.siteMetadata.title}</title>
      </Helmet>

      <article>
        <Header>
          <Title>Eloquent Writings About Stuff</Title>
        </Header>

        <main>
          {posts.map(({ node }, index) => {
            const { fields, frontmatter } = node
            const slug = fields.slug.slice(0, -1)
            const thisYear = format(
              addDays(new Date(frontmatter.date), 1),
              'YYYY'
            )
            let YearComponent
            if (thisYear !== year) {
              YearComponent = <YearTitle date={frontmatter.date} />
              year = thisYear
            }
            return (
              <Flex
                key={node.fields.slug}
                flexDirection="row"
                alignItems="flex-start"
                {...(index + 1 === posts.length ? {} : { mb: [4, 5] })}
              >
                <Box display={['none', 'block']} width={1 / 5}>
                  {YearComponent}
                </Box>

                <Box width={[1, 4 / 5]}>
                  <PostTitle>
                    <PostLink to={slug}>{frontmatter.title}</PostLink>
                  </PostTitle>

                  <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
                    {frontmatter.description}
                  </Paragraph>

                  <ArrowLink dest={slug}>Read More</ArrowLink>
                </Box>
              </Flex>
            )
          }, this)}
        </main>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
