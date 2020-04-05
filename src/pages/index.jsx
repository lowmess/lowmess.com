import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Text, Heading, Link, Container } from 'theme-ui'
import Layout from '../components/Layout'
import getStats from '../utils/getStats'
import pluralize from '../utils/pluralize'

const Bold = ({ children }) => (
  <Text as="span" sx={{ fontWeight: 'bold' }}>
    {children}
  </Text>
)

Bold.propTypes = {
  children: PropTypes.node,
}

const ValueCount = ({ value, singular, plural }) => (
  <Bold>
    {value.toLocaleString()} {pluralize(value, singular, plural)}
  </Bold>
)

ValueCount.propTypes = {
  value: PropTypes.number.isRequired,
  singular: PropTypes.string.isRequired,
  plural: PropTypes.string.isRequired,
}

const IndexPage = () => {
  const { stats } = useStaticQuery(graphql`
    query IndexPage {
      stats {
        commits
        tweets
        steps
        places
        songs
        album {
          name
          artist
        }
        books {
          name
          author
        }
      }
    }
  `)

  const [commits, setCommits] = React.useState(stats.commits)
  const [tweets, setTweets] = React.useState(stats.tweets)
  const [steps, setSteps] = React.useState(stats.steps)
  const [places, setPlaces] = React.useState(stats.places)
  const [songs, setSongs] = React.useState(stats.songs)
  const [album, setAlbum] = React.useState(stats.album)
  const [books, setBooks] = React.useState(stats.books)

  const formatBook = (book) => (
    <React.Fragment>
      <Bold>&ldquo;{book.name}&rdquo;</Bold> by {book.author}
    </React.Fragment>
  )

  const booksToSentence = (booksArr) => {
    if (booksArr.length === 1) return formatBook(booksArr[0])

    if (booksArr.length === 2)
      return (
        <React.Fragment>
          {formatBook(booksArr[0])} and {formatBook(booksArr[1])}
        </React.Fragment>
      )

    return booksArr.map((book, index) => {
      if (index === 0) return formatBook(book)

      if (index + 1 === booksArr.length)
        return <React.Fragment>, and {formatBook(book)}</React.Fragment>

      return (
        <React.Fragment key={book.name}>, {formatBook(book)}</React.Fragment>
      )
    })
  }

  const hydrateStats = async () => {
    const {
      commits: commitStat,
      tweets: tweetsStat,
      places: placesStat,
      steps: stepsStat,
      songs: songsStat,
      album: albumStat,
      books: booksStat,
    } = await getStats()

    if (typeof commitStat === 'number') setCommits(commitStat)

    if (typeof tweetsStat === 'number') setTweets(tweetsStat)

    if (typeof placesStat === 'number') setPlaces(placesStat)

    if (typeof stepsStat === 'number') setSteps(stepsStat)

    if (typeof songsStat === 'number') setSongs(songsStat)

    if (albumStat?.name && albumStat?.artist) setAlbum(albumStat)

    if (booksStat.length > 0) setBooks(booksStat)
  }

  React.useEffect(() => {
    hydrateStats()
  }, [])

  return (
    <Layout>
      <Container py={[null, 3, 4]}>
        <Text variant="section-heading">Introduction</Text>
        <Heading as="h1" variant="site-intro" sx={{ fontWeight: 'bold' }}>
          My name is Alec Lomas, and I make websites.
        </Heading>{' '}
        <Heading as="h2" variant="site-intro">
          Currently, I&rsquo;m helping recruiting stay human at{' '}
          <Link href="https://hiringsolved.com">HiringSolved</Link>.
        </Heading>{' '}
        <Text as="p" variant="site-intro">
          In the last 30 days, I&rsquo;ve pushed{' '}
          <Link variant="ui" href="https://github.com/lowmess">
            <ValueCount value={commits} singular="commit" plural="commits" />
          </Link>{' '}
          to GitHub, sent{' '}
          <Link variant="ui" href="https://twitter.com/lowmess">
            <ValueCount value={tweets} singular="tweet" plural="tweets" />
          </Link>
          , taken <ValueCount value={steps} singular="step" plural="steps" />,
          and visited{' '}
          <ValueCount value={places} singular="place" plural="places" />. My
          most played album is{' '}
          <Link
            variant="ui"
            href="https://www.last.fm/user/lowmess/library/albums?date_preset=LAST_30_DAYS"
          >
            <Bold>&ldquo;{album.name}&rdquo;</Bold> by {album.artist}
          </Link>
          , and I&rsquo;ve listened to{' '}
          <Link
            variant="ui"
            href="https://www.last.fm/user/lowmess/library/tracks?date_preset=LAST_30_DAYS"
          >
            <ValueCount value={songs} singular="song" plural="songs" />
          </Link>{' '}
          overall. I am reading{' '}
          <Link
            variant="ui"
            href="https://www.goodreads.com/user/show/27057705-alec-lomas"
          >
            <ValueCount value={books.length} singular="book" plural="books" />
          </Link>{' '}
          at the moment: {booksToSentence(books)}.
        </Text>
      </Container>
    </Layout>
  )
}

export default IndexPage
