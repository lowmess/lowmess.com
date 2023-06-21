import * as React from 'react'
import type { GetStaticProps } from 'next'
import { Text, Heading, Link, Container } from 'theme-ui'
import getStats, { Stats, Book } from '../lib/getStats'
import pluralize from '../lib/pluralize'

interface ValueCountProps {
	value: number
	singular: string
	plural: string
}

const ValueCount: React.FC<ValueCountProps> = ({ value, singular, plural }) => (
	<React.Fragment>
		{value.toLocaleString()} {pluralize(value, singular, plural)}
	</React.Fragment>
)

interface FormattedBookProps {
	book: Book
}

const FormattedBook: React.FC<FormattedBookProps> = ({ book }) => (
	<React.Fragment>
		&ldquo;{book.name}&rdquo; by {book.author}
	</React.Fragment>
)

interface BooksToSentenceProps {
	books: Array<Book>
}

const BooksToSentence: React.FC<BooksToSentenceProps> = ({ books }) => {
	if (books.length === 1) return <FormattedBook book={books[0]} />

	if (books.length === 2)
		return (
			<React.Fragment>
				<FormattedBook book={books[0]} /> and <FormattedBook book={books[1]} />
			</React.Fragment>
		)

	return (
		<React.Fragment>
			{books.map((book, index) => {
				if (index === 0) return <FormattedBook book={book} />

				if (index + 1 === books.length) {
					return (
						<React.Fragment>
							, and <FormattedBook book={book} />
						</React.Fragment>
					)
				}

				return (
					<React.Fragment key={book.name}>
						, <FormattedBook book={book} />
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}

interface IndexProps {
	stats: Stats
}

const IndexPage: React.FC<IndexProps> = ({ stats }) => {
	const {
		commits = 0,
		steps = 0,
		places = 0,
		songs = 0,
		album = null,
		books = [],
	} = stats

	return (
		<Container>
			<Text as="p" variant="section-heading" mb={3}>
				Introduction
			</Text>

			{/* The `Text` wrapper makes sure spaces are consistently sized */}
			<Text as="div" variant="site-intro" sx={{ display: 'contents' }}>
				<Heading as="h1" variant="site-intro" sx={{ fontWeight: 'bold' }}>
					My name is Alec Lomas, and I make websites.
				</Heading>{' '}
				<Heading as="h2" variant="site-intro">
					I&rsquo;m currently working with{' '}
					<Link href="https://datatheorem.com">Data Theorem</Link> to secure
					modern applications.
				</Heading>{' '}
				<Text as="p" variant="site-intro">
					In the last 30 days, I&rsquo;ve pushed{' '}
					<Link href="https://github.com/lowmess">
						<ValueCount value={commits} singular="commit" plural="commits" />
					</Link>{' '}
					to GitHub, taken{' '}
					<ValueCount value={steps} singular="step" plural="steps" />, and
					visited <ValueCount value={places} singular="place" plural="places" />
					.
					{album.name && album.artist && (
						<React.Fragment>
							{' '}
							My most played album is{' '}
							<Link href="https://www.last.fm/user/lowmess/library/albums?date_preset=LAST_30_DAYS">
								&ldquo;{album.name}&rdquo; by {album.artist}
							</Link>
							, and I&rsquo;ve listened to{' '}
							<Link href="https://www.last.fm/user/lowmess">
								<ValueCount value={songs} singular="song" plural="songs" />
							</Link>{' '}
							overall.
						</React.Fragment>
					)}
					{books.length > 0 && (
						<React.Fragment>
							{' '}
							I am reading{' '}
							<Link href="https://www.goodreads.com/user/show/27057705-alec-lomas">
								<ValueCount
									value={books.length}
									singular="book"
									plural="books"
								/>
							</Link>{' '}
							at the moment: <BooksToSentence books={books} />.
						</React.Fragment>
					)}
				</Text>
			</Text>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const stats = await getStats()

	return {
		props: {
			stats,
		},
		revalidate: 60 * 60, // revalidate at most once per hour
	}
}

export default IndexPage
