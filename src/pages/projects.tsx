import * as React from 'react'
import Head from 'next/head'
import { Flex, Grid, Text, Container, Heading, Link } from 'theme-ui'
import { HStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import projects from '../constants/projects.json'
import metadata from '../constants/metadata.json'

interface Project {
	title: string
	description?: string
	website?: string
	repo?: string
}

const ProjectsPage: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">Projects {metadata.titleSuffix}</title>
		</Head>

		<Header>
			<HeaderName>Projects</HeaderName>

			<HeaderTitle>First-World Problem Solvers</HeaderTitle>
		</Header>

		<Container as="main" mt={5}>
			<Grid columns={[null, 2]} gap={5} sx={{ counterReset: 'projects' }}>
				{projects.map((project: Project) => {
					const { title, description, website, repo } = project

					return (
						<Flex
							key={title}
							sx={{
								alignItems: 'baseline',
								position: 'relative',
								counterIncrement: 'projects',

								'&::before': {
									content: 'counter(projects)',
									position: [null, null, 'absolute'],
									right: '100%',
									marginRight: 3,
									fontSize: [4, 5],
									fontWeight: 'semi-bold',
									lineHeight: 'heading',
									color: 'muted-text',
									userSelect: 'none',
								},
							}}
						>
							<div>
								<Heading>
									<Link variant="ui" href={website || repo}>
										{title}
									</Link>
								</Heading>

								{description && (
									<Text as="p" sx={{ maxWidth: 'measure', marginTop: 2 }}>
										{description}
									</Text>
								)}

								<HStack gap={2} mt={2}>
									{website && <Link href={website}>Website</Link>}

									{website && repo && <span aria-hidden>&#183;</span>}

									{repo && <Link href={repo}>Repository</Link>}
								</HStack>
							</div>
						</Flex>
					)
				})}
			</Grid>
		</Container>
	</React.Fragment>
)

export default ProjectsPage
