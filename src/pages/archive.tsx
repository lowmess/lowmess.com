import * as React from 'react'
import Head from 'next/head'
import { Text, Container, Heading, Link } from 'theme-ui'
import { VStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import metadata from '../constants/metadata.json'

const Dates: React.FC = (props) => (
	<Text as="small" sx={{ fontSize: 1 }} {...props} />
)

const Description: React.FC = (props) => (
	<Text as="p" sx={{ maxWidth: 'measure' }} {...props} />
)

const Tooling: React.FC = (props) => (
	<Text as="p" sx={{ fontSize: 1 }} {...props} />
)

const Archive: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">Archive {metadata.titleSuffix}</title>
		</Head>

		<Header>
			<HeaderName>Archive</HeaderName>

			<HeaderTitle>Visions of Websites Past</HeaderTitle>
		</Header>

		<Container mt={5}>
			<VStack gap={5}>
				<VStack gap={3}>
					<Heading>
						Version 0 <Dates>(2014 &ndash; 2015)</Dates>
					</Heading>

					<Description>
						The code for this version is (perhaps fortunately) lost to time. The
						only thing I remember about it is that it had similar navigation to
						v1. And that it was built as a student project using student design
						work. That&rsquo;s called&nbsp;efficiency.
					</Description>

					<Tooling>
						Built with <Link href="https://jquery.com">jQuery</Link>, I assume.
					</Tooling>
				</VStack>

				<VStack gap={3}>
					<Heading>
						<Link href="https://v1.lowmess.com">Version 1</Link>{' '}
						<Dates>(2015 &ndash; 2017)</Dates>
					</Heading>

					<Description>
						Mostly this was a showcase for the design work I did as a student,
						but if you look closely you can find some client work. The copy (and
						color contrast) on this site is really bad, and I find it&rsquo;s
						best to not think about the quality of the&nbsp;code.
					</Description>

					<Tooling>
						Built with <Link href="https://prepros.io">Prepros</Link>,{' '}
						<Link href="https://pugjs.org">Pug (née Jade)</Link>,{' '}
						<Link href="https://sass-lang.com">Sass</Link>, and{' '}
						<Link href="https://jquery.com">jQuery</Link>.
					</Tooling>
				</VStack>

				<VStack gap={3}>
					<Heading>
						<Link href="https://v2.lowmess.com">Version 2</Link>{' '}
						<Dates>(2017)</Dates>
					</Heading>

					<Description>
						The first portfolio I made as a developer. I hated the design on
						this one basically as soon as I launched it, and it lasted fewer
						than 6 months before I scrapped it for&nbsp;v3.
					</Description>

					<Tooling>
						Built with <Link href="https://rollupjs.org">Rollup</Link>,{' '}
						<Link href="https://metalsmith.io">Metalsmith</Link>,{' '}
						<Link href="https://pugjs.org">Pug</Link>,{' '}
						<Link href="https://postcss.org">PostCSS</Link>, and{' '}
						<Link href="http://tachyons.io">Tachyons</Link>.
					</Tooling>
				</VStack>

				<VStack gap={3}>
					<Heading>
						<Link href="https://v3.lowmess.com">Version 3</Link>{' '}
						<Dates>(2017 &ndash; 2020)</Dates>
					</Heading>

					<Description>
						This design proved popular, and several developers forked the repo
						and used it as a basis for their own sites. However it proved
						limiting when I wanted to implement dark mode. Also I got bored of
						it (the Designer&rsquo;s&nbsp;Curse&trade;).
					</Description>

					<Tooling>
						Built with <Link href="https://gatsbyjs.com">Gatsby</Link>,{' '}
						<Link href="https://preactjs.com">Preact</Link>,{' '}
						<Link href="https://mdxjs.com">MDX</Link>, and{' '}
						<Link href="https://rebassjs.org">Rebass</Link>.
					</Tooling>
				</VStack>

				<VStack gap={3}>
					<Heading>
						<Link href="https://v4.lowmess.com">Version 4</Link>{' '}
						<Dates>(2020 &ndash; present)</Dates>
					</Heading>

					<Description>
						The exact same site as this site (v4.1), but implemented
						in&nbsp;Gatsby.
					</Description>

					<Tooling>
						Built with <Link href="https://gatsbyjs.com">Gatsby</Link>,{' '}
						<Link href="https://preactjs.com">Preact</Link>,{' '}
						<Link href="https://mdxjs.com">MDX</Link>, and{' '}
						<Link href="https://theme-ui.com">Theme UI</Link>.
					</Tooling>
				</VStack>
			</VStack>
		</Container>
	</React.Fragment>
)

export default Archive
