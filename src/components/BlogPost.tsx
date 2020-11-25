import * as React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import { Box, Container } from 'theme-ui'
import metadata from '../constants/metadata.json'
import type { Meta } from '../utils/getAllPosts'
import Stack from './Stack'
import { HeaderName, HeaderTitle } from './Header'

interface BlogPostProps {
	meta: Meta
}

const BlogPost: React.FC<BlogPostProps> = ({ meta, children }) => {
	const { asPath } = useRouter()

	const { title, description, date } = meta

	const formattedDate = format(parseISO(date), 'MMMM d, yyyy')

	return (
		<React.Fragment>
			<Head>
				<title key="title">
					{title} {metadata.titleSuffix}
				</title>

				<meta name="description" content={description} />

				<meta name="twitter:site" content="@lowmess" />

				<meta name="twitter:card" content="summary" />

				<meta key="og:site_name" property="og:site_name" content={title} />

				<meta property="og:title" name="twitter:title" content={title} />

				<meta key="og:url" property="og:url" content={metadata.url + asPath} />

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
