import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../../components/Header'
import { Title, Subtitle } from '../../components/Typography'
import MarkdownContent from '../../components/MarkdownContent'
import { useSiteMetadata } from '../../utils/hooks'
import unwidow from '../../utils/unwidow'

import 'lowmess-prism'

const BlogPostTemplate = ({ pageContext, children }) => {
  const post = pageContext

  const { title, siteUrl } = useSiteMetadata()

  // So this bit is a tad gross. I have to get all MDX nodes, then filter them
  // down to get the actual node the template is rendering. The reason for this
  // is thricefold:
  //
  // 1. If I don't do this, I have to format dates on the frontend and deal
  //    with all that wonky timezone bullshit, and
  // 2. This template can't run Gatsby queries for whatever reason, but mostly
  //    it's because
  // 3. I can't pass variables to `useStaticQuery`
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              datetime: date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { node } = edges.find(
    edge => edge.node.frontmatter.title === post.title
  )

  post.fields = node.fields
  post.frontmatter = { ...post.frontmatter, ...node.frontmatter }

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
          <Title>{unwidow(post.frontmatter.title)}</Title>

          <Subtitle as="p">
            <time dateTime={post.frontmatter.datetime}>
              {post.frontmatter.date}
            </time>
          </Subtitle>
        </Header>

        <MarkdownContent as="main" lineHeight="copy" fontSize={[1, 2]}>
          {children}
        </MarkdownContent>
      </article>
    </>
  )
}

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default BlogPostTemplate
