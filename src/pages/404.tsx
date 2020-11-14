import * as React from 'react'
import Head from 'next/head'
import { Text, Container } from 'theme-ui'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import Link from '../components/Link'
import metadata from '../constants/metadata.json'

const ErrorPage: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">I goofed it {metadata.titleSuffix}</title>
		</Head>

		<Header>
			<HeaderName>Error 404</HeaderName>
			<HeaderTitle>Page Not Found</HeaderTitle>
		</Header>

		<Container mt={[4, 5]}>
			<Text
				as="pre"
				sx={{
					fontSize: [4, 5],
					fontFamily: 'sans',
					lineHeight: 'heading',
				}}
			>
				&ldquo;
				<Link href="/" variant="ui">
					Click here to go home
				</Link>
				&rdquo;
				<br />
				is over-used and boring,
				<br />
				but at least it&rsquo;s clear.
			</Text>
		</Container>
	</React.Fragment>
)

export default ErrorPage
