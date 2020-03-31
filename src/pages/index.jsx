import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Text, Heading, Link, Container } from 'theme-ui'
import Layout from '../components/Layout'
import getStats from '../utils/getStats'

// const IndexPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allProjectsJson(limit: 1) {
//         edges {
//           node {
//             title
//             description
//             website
//             repo
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <article>
//       <Header>
//         <Header.Title>Hi! I&rsquo;m Alec&nbsp;Lomas.</Header.Title>

//         <Header.Subtitle mb={3}>
//           I&rsquo;m a frontend developer &amp; designer at&nbsp;
//           <Link variant="ui-link" href="https://hiringsolved.com/">
//             HiringSolved
//           </Link>
//           .
//         </Header.Subtitle>

//         <Paragraph fontSize={[2, 3]} mt={3} mb={4} letterSpacing="-0.02em">
//           My goal is to create beautiful websites and rich interactions without
//           sacrificing usability. I care deeply about legibility, performance,
//           and the open web. And&nbsp;burritos.
//         </Paragraph>
//       </Header>

//       <main>
//         <Heading fontSize={[3, 4]} lineHeight="title" mt={5} mb={4}>
//           Latest Project
//         </Heading>

//         <ProjectPreview
//           project={data.allProjectsJson.edges[0].node}
//           level="h3"
//         />
//       </main>
//     </article>
//   )
// }

const Bold = ({ children }) => (
  <Text as="span" sx={{ fontWeight: 'bold' }}>
    {children}
  </Text>
)

Bold.propTypes = {
  children: PropTypes.node,
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

  const [commits, setCommits] = React.useState(stats.commits?.toLocaleString())
  const [tweets, setTweets] = React.useState(stats.tweets?.toLocaleString())
  const [steps, setSteps] = React.useState(stats.steps?.toLocaleString())
  const [places, setPlaces] = React.useState(stats.places?.toLocaleString())
  const [songs, setSongs] = React.useState(stats.songs?.toLocaleString())
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

    if (commitStat) setCommits(commitStat.toLocaleString())

    if (tweetsStat) setTweets(tweetsStat.toLocaleString())

    if (placesStat) setPlaces(placesStat.toLocaleString())

    if (stepsStat) setSteps(stepsStat.toLocaleString())

    if (songsStat) setSongs(songsStat.toLocaleString())

    if (albumStat?.name && albumStat?.artist) setAlbum(albumStat)

    if (booksStat.length > 0) setBooks(booksStat)
  }

  React.useEffect(() => {
    hydrateStats()
  }, [])

  return (
    <Layout>
      <Container py={5}>
        <Heading as="h1" variant="site-title">
          My name is Alec Lomas, and I make websites.
        </Heading>{' '}
        <Heading as="h2" variant="site-subtitle">
          Currently, I&rsquo;m helping recruiting stay human at{' '}
          <Link href="https://hiringsolved.com">HiringSolved</Link>.
        </Heading>{' '}
        <Text as="p" variant="site-intro">
          In the last 30 days, I&rsquo;ve pushed <Bold>{commits} commits</Bold>{' '}
          to GitHub and sent <Bold>{tweets} tweets</Bold>. I&rsquo;ve taken{' '}
          <Bold>{steps} steps</Bold> while visiting <Bold>{places} places</Bold>
          . My most played album is <Bold>&ldquo;{album.name}&rdquo;</Bold> by{' '}
          {album.artist}, and I&rsquo;ve listened to <Bold>{songs} songs</Bold>{' '}
          overall. I am reading{' '}
          <Bold>
            {books.length} {books.length > 1 ? 'books' : 'book'}
          </Bold>{' '}
          at the moment: {booksToSentence(books)}.
        </Text>
      </Container>
    </Layout>
  )
}

export default IndexPage
