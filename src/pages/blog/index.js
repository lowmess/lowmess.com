import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import system from 'system-components'
import Header from '../../components/Header'
import ArrowLink from '../../components/ArrowLink'
import { Box, Flex, Text } from '../../components/Primitives'
import { Title, Paragraph } from '../../components/Typography'
import { useSiteMetadata } from '../../utils/hooks'
import { themeHover } from '../../utils/styles'

const YearTitle = ({ year }) => (
  <Text is="h2" fontSize={[2, 3]} fontWeight="5" mt={0}>
    {year}
  </Text>
)

YearTitle.propTypes = {
  year: PropTypes.string.isRequired,
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

const BlogPage = () => {
  const { title } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query BlogQuery {
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
          <Title>Eloquent Writings About Stuff</Title>
        </Header>

        <main>
          {posts.map(({ node }, index) => {
            const { fields, frontmatter } = node
            const thisYear = frontmatter.year
            let YearComponent

            if (thisYear !== year) {
              YearComponent = <YearTitle year={frontmatter.year} />
              year = thisYear
            }

            return (
              <Flex
                key={fields.slug}
                flexDirection="row"
                alignItems="flex-start"
                {...(index + 1 === posts.length ? {} : { mb: [4, 5] })}
              >
                <Box display={['none', 'block']} width={1 / 5}>
                  {YearComponent}
                </Box>

                <Box width={[1, 4 / 5]}>
                  <PostTitle>
                    <PostLink to={fields.slug}>{frontmatter.title}</PostLink>
                  </PostTitle>

                  <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
                    {frontmatter.description}
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
