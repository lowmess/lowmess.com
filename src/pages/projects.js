import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Text } from '../components/Primitives'
import { Rule } from '../components/Typography'
import ProjectPreview from '../components/ProjectPreview'

const ProjectsPage = ({ location, data }) => {
  const projects = data.allProjectsJson.edges
  return (
    <Layout location={location}>
      <Helmet>
        <title>Projects • {data.site.siteMetadata.title}</title>
      </Helmet>

      <article>
        <header>
          <Text
            as="h1"
            fontSize={[4, 5]}
            fontWeight="7"
            lineHeight="title"
            mt={0}
            mb={3}
          >
            First-World Problem Solvers
          </Text>

          <Rule mt={4} mb={5} />
        </header>

        <main>
          {projects.map(({ node }, index) => {
            return (
              <ProjectPreview
                project={node}
                level="h2"
                key={node.title}
                {...(index + 1 === projects.length ? {} : { mb: [4, 5] })}
              />
            )
          })}
        </main>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          description
          website
          repo
        }
      }
    }
  }
`

export default ProjectsPage
