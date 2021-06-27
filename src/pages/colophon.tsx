import * as React from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Grid, Text, Container, Heading, Link } from 'theme-ui'
import { VStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import pkg from '../../package-lock.json'
import metadata from '../constants/metadata.json'

const DependencyList = (props) => (
	<VStack
		as="ul"
		gap={2}
		sx={{
			marginTop: 3,
			padding: 0,
			listStyleType: 'none',
		}}
		{...props}
	/>
)

interface DependencyProps {
	version?: string
	href?: string
}

const Dependency: React.FC<DependencyProps> = ({ version, href, children }) => (
	<Text as="li" sx={{ display: 'inline-flex', alignItems: 'baseline' }}>
		<Link variant="ui" href={href} sx={{ fontSize: [2, 4] }}>
			{children}
		</Link>

		{version && (
			<Text as="span" sx={{ fontFamily: 'mono', fontSize: 0 }}>
				&#8201;v{version}
			</Text>
		)}
	</Text>
)

interface ColophonProps {
	versions: {
		[dependency: string]: string
	}
}

const ColophonPage: React.FC<ColophonProps> = ({ versions }) => {
	const { react, next, mdx, themeUI, prismjs, typescript, eslint, prettier } =
		versions

	return (
		<React.Fragment>
			<Head>
				<title key="title">Colophon {metadata.titleSuffix}</title>
			</Head>

			<Header>
				<HeaderName>Colophon</HeaderName>

				<HeaderTitle>Building Blocks</HeaderTitle>
			</Header>

			<Container mt={5}>
				<Grid columns={[1, 3]} gap={4}>
					<Box>
						<Heading color="muted-text">Functionality</Heading>

						<DependencyList>
							<Dependency
								version={typescript}
								href="https://typescriptlang.org/"
							>
								TypeScript
							</Dependency>

							<Dependency version={react} href="https://reactjs.org">
								React
							</Dependency>

							<Dependency version={next} href="https://nextjs.org">
								Next.js
							</Dependency>

							<Dependency version={mdx} href="https://mdxjs.com">
								MDX
							</Dependency>
						</DependencyList>
					</Box>

					<Box>
						<Heading color="muted-text" mt={[4, 0]}>
							Design
						</Heading>

						<DependencyList>
							<Dependency version={themeUI} href="https://theme-ui.com">
								Theme UI
							</Dependency>

							<Dependency version={prismjs} href="https://prismjs.com/">
								Prism
							</Dependency>

							<Dependency version="3.21" href="https://rsms.me/inter">
								Inter
							</Dependency>

							<Dependency version="1.000" href="https://dank.sh">
								Dank Mono
							</Dependency>
						</DependencyList>
					</Box>

					<Box>
						<Heading color="muted-text" mt={[4, 0]}>
							Infrastructure
						</Heading>

						<DependencyList>
							<Dependency href="https://github.com">GitHub</Dependency>

							<Dependency href="https://vercel.com">Vercel</Dependency>

							<Dependency version={eslint} href="https://eslint.org">
								ESLint
							</Dependency>

							<Dependency version={prettier} href="https://prettier.io">
								Prettier
							</Dependency>
						</DependencyList>
					</Box>
				</Grid>
			</Container>
		</React.Fragment>
	)
}

// `getStaticProps` must be async, but I don't need to wait on jack
// eslint-disable-next-line require-await
export const getStaticProps: GetStaticProps = async () => {
	const {
		dependencies: {
			react: { version: react },
			next: { version: next },
			'@mdx-js/mdx': { version: mdx },
			'theme-ui': { version: themeUI },
			prismjs: { version: prismjs },
			typescript: { version: typescript },
			eslint: { version: eslint },
			prettier: { version: prettier },
		},
	} = pkg

	const versions = {
		react,
		next,
		mdx,
		themeUI,
		prismjs,
		typescript,
		eslint,
		prettier,
	}

	return {
		props: {
			versions,
		},
	}
}

export default ColophonPage
