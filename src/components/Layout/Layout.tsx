import * as React from 'react'
import Head from 'next/head'
import { Box, Flex } from 'theme-ui'
import metadata from '../../constants/metadata.json'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyles from './GlobalStyles'

const Layout: React.FC = ({ children }) => {
	const { title, description } = metadata

	return (
		<React.Fragment>
			<Head>
				{/*
				 * Shouldn't be set in `_document`:
				 * https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md
				 */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title key="title">{title}</title>

				<meta name="description" content={description} />
			</Head>

			<Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
				<GlobalStyles />

				<Nav mb={5} />

				<Box id="main-content" sx={{ flex: 1, paddingY: [null, 3, 4] }}>
					{children}
				</Box>

				<Footer mt={5} />
			</Flex>
		</React.Fragment>
	)
}

export default Layout
