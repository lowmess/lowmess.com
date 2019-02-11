import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { Title, Subtitle } from '../components/Typography'
import MarkdownContent from '../components/MarkdownContent'

import 'lowmess-prism'

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <Helmet>
        <title>
          {post.frontmatter.title} • {data.site.siteMetadata.title}
        </title>

        <meta name="description" content={post.frontmatter.description} />

        <meta name="twitter:site" content="@lowmess" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta
          property="og:title"
          name="twitter:title"
          content={post.frontmatter.title}
        />
        <meta
          property="og:url"
          content={`${data.site.siteMetadata.siteUrl}${post.fields.slug}`}
        />
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

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
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
