import * as React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { addMinutes, format } from 'date-fns'
import { Box, Container } from 'theme-ui'
import titleSuffix from '../constants/titleSuffix'
import Stack from './Stack'
import { HeaderName, HeaderTitle } from './Header'

// eslint-disable-next-line import/exports-last
export type Meta = {
  title: string
  description?: string
  date?: string
}

interface BlogPostProps {
  meta: Meta
}

const BlogPost: React.FC<BlogPostProps> = ({ meta, children }) => {
  const { asPath } = useRouter()

  const { title, description, date } = meta

  const d = new Date(date)
  const dateOffset = d.getTimezoneOffset()
  const datetime = addMinutes(d, dateOffset)
  const formattedDate = format(datetime, 'MMMM d, yyyy')

  return (
    <React.Fragment>
      <Head>
        <title key="title">
          {title} {titleSuffix}
        </title>

        <meta name="description" content={description} />

        <meta name="twitter:site" content="@lowmess" />

        <meta name="twitter:card" content="summary" />

        <meta key="og:site_name" property="og:site_name" content={title} />

        <meta property="og:title" name="twitter:title" content={title} />

        <meta key="og:url" property="og:url" content={asPath} />

        <meta
          property="og:description"
          name="twitter:description"
          content={description}
        />
      </Head>

      <Box as="header">
        <Container sx={{ maxWidth: 'mdx-measure', fontSize: [null, null, 3] }}>
          <HeaderName as="span">
            <time dateTime={date}>{formattedDate}</time>
          </HeaderName>

          <HeaderTitle as="h1" aria-hidden="false">
            {title}
          </HeaderTitle>
        </Container>
      </Box>

      <Stack gap={4} mt={[4, 5]}>
        {children}
      </Stack>
    </React.Fragment>
  )
}

export default BlogPost
