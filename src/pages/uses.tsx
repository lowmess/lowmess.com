import * as React from 'react'
import Head from 'next/head'
import { Grid, Text, Container, Heading, Link, SxProp } from 'theme-ui'
import { VisuallyHidden } from '@reach/visually-hidden'
import { VStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import metadata from '../constants/metadata.json'

interface DependencyProps {
	href?: string
}

const Dependency: React.FC<DependencyProps> = ({ href, ...props }) => {
	const WrapperComponent: React.FC<SxProp> = (nestedProps) =>
		href ? (
			<Link variant="ui" href={href} {...nestedProps} />
		) : (
			<Text as="span" {...nestedProps} />
		)

	return <WrapperComponent sx={{ fontSize: [2, 4] }} {...props} />
}

const Details: React.FC = ({ children, ...props }) => (
	<Text sx={{ display: 'block', fontSize: 0 }} {...props}>
		<VisuallyHidden> (</VisuallyHidden>
		{children}
		<VisuallyHidden>)</VisuallyHidden>
	</Text>
)

const DependencyList = (props) => (
	<VStack
		as="ul"
		gap={2}
		sx={{ padding: 0, listStyleType: 'none' }}
		{...props}
	/>
)

const UsesPage: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">Uses {metadata.titleSuffix}</title>
		</Head>

		<Header>
			<HeaderName>Uses</HeaderName>

			<HeaderTitle>Tools of My Trade</HeaderTitle>
		</Header>

		<Container mt={5}>
			<Grid columns={[1, '8rem 1fr']} gap={[4, 5]}>
				<Heading color="muted-text">Hardware</Heading>

				<DependencyList>
					<li>
						<Dependency>2020 13&Prime; MacBook Pro</Dependency>

						<Details>1.4GHz Quad-Core Intel i5, 16GB memory</Details>
					</li>

					<li>
						<Dependency>34&Prime; Acer XR Ultrawide Monitor</Dependency>

						<Details>XR342CK Pbmiiqphuzx</Details>
					</li>

					<li>
						<Dependency href="https://input.club/whitefox">
							Input Club WhiteFox Keyboard
						</Dependency>

						<Details>Hako Clear switches</Details>
					</li>

					<li>
						<Dependency>Magic Trackpad 2</Dependency>
					</li>
				</DependencyList>

				<Heading color="muted-text" mt={[4, 0]}>
					Software
				</Heading>

				<DependencyList>
					<li>
						<Dependency href="https://code.visualstudio.com">
							VS Code
						</Dependency>

						<Details>
							<Link variant="ui" href="https://dank.sh">
								Dank Mono
							</Link>
							,{' '}
							<Link variant="ui" href="https://plastictheme.com">
								Plastic theme
							</Link>
						</Details>
					</li>

					<li>
						<Dependency href="https://https://iterm2.com">iTerm 2</Dependency>

						<Details>
							Zsh,{' '}
							<Link variant="ui" href="https://dank.sh">
								Dank Mono
							</Link>
							,{' '}
							<Link variant="ui" href="https://plastictheme.com">
								Plastic theme
							</Link>
						</Details>
					</li>

					<li>
						<Dependency href="https://affinity.serif.com/en-us/designer">
							Affinity Designer
						</Dependency>
					</li>

					<li>
						<Dependency href="https://www.alfredapp.com">Alfred</Dependency>
					</li>

					<li>
						<Dependency href="https://mizage.com/divvy">Divvy</Dependency>
					</li>

					<li>
						<Dependency href="https://kapeli.com/dash">Dash</Dependency>
					</li>

					<li>
						<Dependency href="https://tot.rocks">Tot</Dependency>
					</li>
				</DependencyList>

				<Heading color="muted-text" mt={[4, 0]}>
					Services
				</Heading>

				<DependencyList>
					<li>
						<Dependency href="https://github.com">GitHub</Dependency>
					</li>

					<li>
						<Dependency href="https://netlify.com">Netlify</Dependency>
					</li>

					<li>
						<Dependency href="https://vercel.com">Vercel</Dependency>
					</li>

					<li>
						<Dependency href="https://dropbox.com">Dropbox</Dependency>
					</li>
				</DependencyList>
			</Grid>
		</Container>
	</React.Fragment>
)

export default UsesPage
