import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../../components/Header'
import { Title, Subtitle } from '../../components/Typography'
import MarkdownContent from './MarkdownContent'
import { useSiteMetadata } from '../../utils/hooks'

import 'lowmess-prism'

const BlogPostTemplate = ({ data }) => {
  const { title, siteUrl } = useSiteMetadata()

  const post = data.markdownRemark

  return (
    <>
      <Helmet>
        <title>
          {post.frontmatter.title} • {title}
        </title>

        <meta name="description" content={post.frontmatter.description} />

        <meta name="twitter:site" content="@lowmess" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content={title} />
        <meta
          property="og:title"
          name="twitter:title"
          content={post.frontmatter.title}
        />
        <meta property="og:url" content={`${siteUrl}${post.fields.slug}`} />
        <meta
          property="og:description"
          name="twitter:description"
          content={post.frontmatter.description}
        />
      </Helmet>

      <article>
        <Header>
          <Title>{post.frontmatter.title}</Title>

          <Subtitle is="p">
            <time dateTime={post.frontmatter.datetime}>
              {post.frontmatter.date}
            </time>
          </Subtitle>
        </Header>

        <MarkdownContent
          is="main"
          lineHeight="copy"
          fontSize={[1, 2]}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </>
  )
}

// All the other page components get to useStaticQuery,
// but not this one cause the query takes variables 🙄
BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        datetime: date(formatString: "YYYY-MM-DD")
        description
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPostTemplate
