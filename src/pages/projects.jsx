import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Flex, Grid, Text, Container, Heading, Link } from 'theme-ui'
import Layout from '../components/Layout'
import Inline from '../components/Inline'
import { Header, HeaderName, HeaderTitle } from '../components/Header'

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

        <HeaderTitle>First-World Problem Solvers</HeaderTitle>
      </Header>

      <Container as="main" mt={5}>
        <Grid columns={[null, 2]} gap={5}>
          {projects.map(({ node }, index) => {
            const { title, description, website, repo } = node
            return (
              <Flex
                key={title}
                sx={{ position: 'relative', alignItems: 'baseline' }}
              >
                <Text
                  aria-hidden
                  variant="heading"
                  sx={{
                    position: [null, null, 'absolute'],
                    right: '100%',
                    marginRight: 3,
                    color: 'muted-text',
                    userSelect: 'none',
                  }}
                >
                  {index + 1}
                </Text>

                <Box>
                  <Heading>
                    <Link variant="ui" href={website || repo}>
                      {title}
                    </Link>
                  </Heading>

                  {description && (
                    <Text as="p" sx={{ maxWidth: 'measure', marginTop: 2 }}>
                      {description}
                    </Text>
                  )}

                  <Inline gap={2} mt={2}>
                    {website && <Link href={website}>Website</Link>}

                    {website && repo && '\u00B7'}

                    {repo && <Link href={repo}>Repository</Link>}
                  </Inline>
                </Box>
              </Flex>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
