import * as React from 'react'
import {
	Box,
	Grid,
	Text,
	Heading,
	Container,
	Link as ThemeLink,
} from 'theme-ui'
import { BoxProps, LinkProps } from '@theme-ui/components'
import Link from '../components/Link'
import { latestPost } from '../lib/posts'

interface FooterLinkProps extends LinkProps {
	external?: boolean
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, external, ...props }) =>
	external ? (
		<ThemeLink variant="ui" href={href} {...props} />
	) : (
		<Link variant="ui" href={href} {...props} />
	)

const Footer: React.FC<BoxProps> = (props) => (
	<Box as="footer" bg="muted" py={5} {...props}>
		<Container>
			<Grid
				gap={[4, 3]}
				columns={['repeat(2, minmax(max-content, 8rem))', '1fr 1fr 3fr']}
				sx={{ justifyContent: ['center', 'start'] }}
			>
				<Box>
					<Heading variant="section-heading" mb={3}>
						Site
					</Heading>

					<Text as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
						<li>
							<FooterLink href="/">Home</FooterLink>
						</li>

						<li>
							<FooterLink href="/projects">Projects</FooterLink>
						</li>

						<li>
							<FooterLink href="/blog">Blog</FooterLink>
						</li>

						<li>
							<FooterLink href="/colophon">Colophon</FooterLink>
						</li>

						<li>
							<FooterLink href="/uses">Uses</FooterLink>
						</li>

						<li>
							<FooterLink href="/archive">Archive</FooterLink>
						</li>

						<li>
							<FooterLink href="/rss.xml" external>
								RSS
							</FooterLink>
						</li>
					</Text>
				</Box>

				<Box>
					<Heading variant="section-heading" mb={3}>
						Links
					</Heading>

					<Text as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
						<li>
							<FooterLink href="https://github.com/lowmess" external>
								GitHub
							</FooterLink>
						</li>

						<li>
							<FooterLink href="https://twitter.com/lowmess" external>
								Twitter
							</FooterLink>
						</li>

						<li>
							<FooterLink href="https://dribbble.com/lowmess" external>
								Dribbble
							</FooterLink>
						</li>

						<li>
							<FooterLink href="https://codepen.io/lowmess" external>
								CodePen
							</FooterLink>
						</li>

						<li>
							<FooterLink href="https://linkedin.com/in/lowmess" external>
								LinkedIn
							</FooterLink>
						</li>

						<li>
							<FooterLink href="https://resume.lowmess.com" external>
								Résumé
							</FooterLink>
						</li>
					</Text>
				</Box>

				<Box sx={{ display: ['none', 'block'] }}>
					<Heading variant="section-heading" mb={3}>
						Latest Blog Post
					</Heading>

					<FooterLink
						href={latestPost.url}
						sx={{
							fontSize: 5,
							fontWeight: 'bold',
							lineHeight: 'heading',
							textDecoration: 'none',
						}}
					>
						{latestPost.title}
					</FooterLink>

					<Text as="p" sx={{ maxWidth: 'measure', marginTop: 1 }}>
						{latestPost.description}
					</Text>
				</Box>
			</Grid>
		</Container>
	</Box>
)

export default Footer
