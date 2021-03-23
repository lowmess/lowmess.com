/* eslint-disable react/prop-types */
import * as React from 'react'
import GithubSlugger from 'github-slugger'
import { onlyText } from 'react-children-utilities'
import { Container, Heading, Link } from 'theme-ui'
import { HeadingProps } from '@theme-ui/components'

const LinkIcon: React.FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-link"
	>
		<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
		<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
	</svg>
)

const AutolinkHeading: React.FC<HeadingProps> = ({
	sx,
	children,
	...props
}) => {
	const childText = onlyText(children)

	const slugger = new GithubSlugger()

	const slug = slugger.slug(childText, false)

	return (
		<Container sx={{ maxWidth: 'mdx-measure' }}>
			<Heading
				id={slug}
				sx={{
					position: 'relative',
					display: ['inline-block', 'inline-flex'],
					alignItems: 'baseline',
					...sx,

					a: {
						order: [null, 0],
						visibility: 'hidden',
						position: [null, 'absolute'],
						right: [null, '100%'],
						paddingX: 2,
						color: 'muted-text',
					},

					'&:hover a': {
						visibility: 'visible',
					},
				}}
				{...props}
			>
				{children}

				<Link variant="ui" href={`#${slug}`}>
					<LinkIcon />
				</Link>
			</Heading>
		</Container>
	)
}

const h1: React.FC = () => {
	if (process.env.NODE_ENV !== 'production')
		return (
			<Heading
				as="h1"
				sx={{ fontSize: '6rem !important', color: 'red', textAlign: 'center' }}
			>
				Don&rsquo;t use h1s
			</Heading>
		)

	return <div />
}

const h2: React.FC = (props) => (
	<AutolinkHeading as="h2" mt={[4, 5]} {...props} />
)

const h3: React.FC = (props) => (
	<AutolinkHeading
		as="h3"
		sx={{ fontSize: [3, 4], marginTop: [3, 4] }}
		{...props}
	/>
)

const h4: React.FC = (props) => (
	<AutolinkHeading as="h4" variant="section-heading" {...props} />
)

const h5: React.FC = (props) => (
	<AutolinkHeading as="h5" variant="section-heading" {...props} />
)

const h6: React.FC = (props) => (
	<AutolinkHeading as="h6" variant="section-heading" {...props} />
)

export { h1, h2, h3, h4, h5, h6 }
