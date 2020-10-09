import * as React from 'react'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Box, Grid, Text, Container, Heading, Link } from 'theme-ui'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import type { Meta } from '../components/BlogPost'
import posts from '../utils/getAllPosts'
import titleSuffix from '../constants/titleSuffix'

type Post = {
  link: string
  module: {
    meta: Meta
  }
}

const BlogPage: React.FC = () => {
  let year = '0'

  return (
    <React.Fragment>
      <Head>
        <title key="title">Blog {titleSuffix}</title>
      </Head>

      <Header>
        <HeaderName>Blog</HeaderName>

        <HeaderTitle>Eloquent Writings About Stuff</HeaderTitle>
      </Header>

      <Container as="main" mt={[4, 5]}>
        <Grid columns={[1, '8rem 1fr']} gap={[4, 5]}>
          {posts.map((post: Post) => {
            const {
              link,
              module: { meta: { title, description, date } = {} } = {},
            } = post

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
                    <NextLink href={link} passHref>
                      <Link variant="ui">{title}</Link>
                    </NextLink>
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
