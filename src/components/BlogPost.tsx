import * as React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Box, Container } from 'theme-ui'
import { format, addMinutes } from 'date-fns'
import metadata from '../constants/metadata.json'
import { VStack } from '../components/Stack'
import { HeaderName, HeaderTitle } from '../components/Header'
import { Meta } from '../types/posts'

interface BlogPostProps {
	meta: Meta
}

const BlogPost: React.FC<BlogPostProps> = ({ meta, children }) => {
	const { asPath } = useRouter()

	const { title, description, date } = meta

	const offset = date.getTimezoneOffset()
	const datetime = date.toISOString()
	const displayDate = format(addMinutes(date, offset), 'MMMM d, yyyy')

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
						<time dateTime={datetime}>{displayDate}</time>
					</HeaderName>

					<HeaderTitle as="h1" aria-hidden="false">
						{title}
					</HeaderTitle>
				</Container>
			</Box>

			<VStack gap={4} mt={[4, 5]}>
				{children}
			</VStack>
		</React.Fragment>
	)
}

export default BlogPost
