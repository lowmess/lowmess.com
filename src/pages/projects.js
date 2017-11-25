import React from 'react'
import { Title, Rule } from '../components/Typography'
import ProjectPreview from '../components/ProjectPreview'

const ProjectsPage = ({ data }) => {
  const projects = data.allProjectsJson.edges
  return (
    <article>
      <header>
        <Title fontSize={[4, 5]} fontWeight="7" lineHeight="title" mt={0} mb={3}>
          First-World Problem Solvers
        </Title>
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
  )
}

export const pageQuery = graphql`
  query ProjectsQuery {
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
