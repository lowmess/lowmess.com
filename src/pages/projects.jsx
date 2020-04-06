import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Grid, Container } from 'theme-ui'
import Layout from '../components/Layout'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import ProjectPreview from '../components/ProjectPreview'

const ProjectsPage = () => {
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
    <Layout>
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <Header>
        <HeaderName>Projects</HeaderName>

        <HeaderTitle>First-World Problem&nbsp;Solvers</HeaderTitle>
      </Header>

      <Container as="main" mt={5}>
        <Grid columns={[null, 2]} gap={5}>
          {projects.map(({ node }, index) => {
            return (
              <ProjectPreview
                key={node.title}
                project={node}
                count={index + 1}
              />
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
