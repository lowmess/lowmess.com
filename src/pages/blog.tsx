import * as React from 'react'
import Head from 'next/head'
import { Box, Grid, Text, Container, Heading } from 'theme-ui'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import Link from '../components/Link'
import posts, { Post } from '../utils/getAllPosts'
import metadata from '../constants/metadata.json'

const BlogPage: React.FC = () => {
  let year = '0'

  return (
    <React.Fragment>
      <Head>
        <title key="title">Blog {metadata.titleSuffix}</title>
      </Head>

      <Header>
        <HeaderName>Blog</HeaderName>

        <HeaderTitle>Eloquent Writings About Stuff</HeaderTitle>
      </Header>

      <Container as="main" mt={[4, 5]}>
        <Grid columns={[1, '8rem 1fr']} gap={[4, 5]}>
          {posts.map((post: Post) => {
            const { link, meta: { title, description, date } = {} } = post

            const thisYear = date.substring(0, 4)

            const YearComponent =
              thisYear === year ? (
                <Box sx={{ display: ['none', 'block'] }} />
              ) : (
                <Heading color="muted-text" mt={[4, 0]}>
                  {thisYear}
                </Heading>
              )

            year = thisYear

            return (
              <React.Fragment key={link}>
                {YearComponent}

                <div>
                  <Heading as="h3" sx={{ display: 'inline-block' }}>
                    <Link href={link} variant="ui">
                      {title}
                    </Link>
                  </Heading>

                  <Text as="p" sx={{ maxWidth: 'measure', marginTop: 1 }}>
                    {description}
                  </Text>
                </div>
              </React.Fragment>
            )
          })}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default BlogPage
