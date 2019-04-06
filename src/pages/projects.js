import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import ProjectPreview from '../components/ProjectPreview'
import { Title } from '../components/Typography'
import { useSiteMetadata } from '../utils/hooks'

const ProjectsPage = () => {
  const { title } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query {
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
  `)

  const projects = data.allProjectsJson.edges

  return (
    <>
      <Helmet>
        <title>Projects • {title}</title>
      </Helmet>

      <article>
        <Header>
          <Title>First-World Problem&nbsp;Solvers</Title>
        </Header>

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
    </>
  )
}

export default ProjectsPage
