import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Grid, Text, Container, Heading } from 'theme-ui'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import Link from '../components/Link'
import metadata from '../constants/metadata.json'
import { dateSortDesc } from '../utils/posts'
// eslint-disable-next-line import/no-unresolved
import { frontMatter } from './blog/*.mdx'

interface BlogPageProps {
	posts: FrontMatter[]
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
	let year = 0

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
					{posts.map((post) => {
						const { title, description, year: postYear, slug, url } = post

						const thisYear = postYear

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
							<React.Fragment key={slug}>
								{YearComponent}

								<div>
									<Heading as="h3" sx={{ display: 'inline-block' }}>
										<Link href={url} variant="ui">
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

// eslint-disable-next-line require-await
export const getStaticProps: GetStaticProps = async () => {
	const posts = frontMatter.sort(dateSortDesc)

	return {
		props: {
			posts,
		},
	}
}

export default BlogPage
