import * as React from 'react'
import Head from 'next/head'
import { Grid, Text, Container, Heading, Link, SxProp } from 'theme-ui'
import Stack from '../components/Stack'
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

const Details: React.FC = (props) => (
	<Text sx={{ display: 'block', fontSize: 0 }} {...props} />
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

				<Stack gap={2}>
					<React.Fragment>
						<Dependency>2020 13&Prime; MacBook Pro</Dependency>

						<Details>1.4GHz Quad-Core Intel i5, 16GB memory</Details>
					</React.Fragment>

					<React.Fragment>
						<Dependency>34&Prime; Acer XR Ultrawide Monitor</Dependency>

						<Details>XR342CK Pbmiiqphuzx</Details>
					</React.Fragment>

					<React.Fragment>
						<Dependency href="https://input.club/whitefox">
							Input Club WhiteFox Keyboard
						</Dependency>

						<Details>Hako Clear switches</Details>
					</React.Fragment>

					<Dependency>Magic Mouse 2</Dependency>
				</Stack>

				<Heading color="muted-text" mt={[4, 0]}>
					Software
				</Heading>

				<Stack gap={2}>
					<React.Fragment>
						<Dependency href="https://code.visualstudio.com">
							VS Code
						</Dependency>

						<Details>
							<Link variant="ui" href="https://dank.sh">
								Dank Mono
							</Link>
							,{' '}
							<Link variant="ui" href="https://will-stone.github.io/plastic">
								Plastic theme
							</Link>
						</Details>
					</React.Fragment>

					<React.Fragment>
						<Dependency href="https://https://iterm2.com">iTerm 2</Dependency>

						<Details>
							Zsh,{' '}
							<Link variant="ui" href="https://dank.sh">
								Dank Mono
							</Link>
							,{' '}
							<Link
								variant="ui"
								href="https://gist.github.com/lowmess/8dcb70cd9014e78337ef9658518c5353"
							>
								Plastic theme
							</Link>
						</Details>
					</React.Fragment>

					<Dependency href="https://affinity.serif.com/en-us/designer">
						Affinity Designer
					</Dependency>

					<Dependency href="https://www.alfredapp.com">Alfred</Dependency>

					<Dependency href="https://mizage.com/divvy">Divvy</Dependency>

					<Dependency href="https://kapeli.com/dash">Dash</Dependency>

					<Dependency href="https://tot.rocks">Tot</Dependency>
				</Stack>

				<Heading color="muted-text" mt={[4, 0]}>
					Services
				</Heading>

				<Stack gap={2}>
					<Dependency href="https://github.com">GitHub</Dependency>

					<Dependency href="https://netlify.com">Netlify</Dependency>

					<Dependency href="https://vercel.com">Vercel</Dependency>

					<Dependency href="https://dropbox.com">Dropbox</Dependency>
				</Stack>
			</Grid>
		</Container>
	</React.Fragment>
)

export default UsesPage
