import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'rebass'
import getStats from './getStats'
import Stat from './Stat'

const SectionTitle = ({ children, ...props }) => (
  <Heading mb={4} fontSize={[3, 4]} {...props}>
    {children}
  </Heading>
)

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

const Stats = ({ ...props }) => {
  const [commits, setCommits] = useState(null)
  const [tweets, setTweets] = useState(null)
  const [places, setPlaces] = useState(null)
  const [steps, setSteps] = useState(null)
  const [songs, setSongs] = useState(null)
  const [album, setAlbum] = useState(null)
  const [books, setBooks] = useState([])

  const fillStats = async () => {
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

    if (albumStat && albumStat.name && albumStat.artist) {
      const albumComponent = (
        <span>
          <em>{albumStat.name}</em>, {albumStat.artist}
        </span>
      )
      setAlbum(albumComponent)
    }

    if (booksStat && booksStat.length) setBooks(booksStat)
  }

  useEffect(() => {
    fillStats()
  }, [])

  return (
    <>
      <Box {...props}>
        <SectionTitle>In the Last 30 Days</SectionTitle>

        <Stat mb={2}>
          <Stat.Title>GitHub Commits</Stat.Title>
          <Stat.Value>{commits || '\u2014'}</Stat.Value>
        </Stat>

        <Stat mb={2}>
          <Stat.Title>Tweets Sent</Stat.Title>
          <Stat.Value>{tweets || '\u2014'}</Stat.Value>
        </Stat>

        <Stat mb={2}>
          <Stat.Title>Places Visited</Stat.Title>
          <Stat.Value>{places || '\u2014'}</Stat.Value>
        </Stat>

        <Stat mb={2}>
          <Stat.Title>Steps Taken</Stat.Title>
          <Stat.Value>{steps || '\u2014'}</Stat.Value>
        </Stat>

        <Stat mb={2}>
          <Stat.Title>Songs Played</Stat.Title>
          <Stat.Value>{songs || '\u2014'}</Stat.Value>
        </Stat>

        <Stat mb={2}>
          <Stat.Title>Top Album</Stat.Title>
          <Stat.Value>{album || '\u2014'}</Stat.Value>
        </Stat>
      </Box>

      <Box {...props}>
        <SectionTitle>Currently Reading</SectionTitle>

        {!books.length && (
          <Stat>
            <Stat.Value width={1}>{'\u2014'}</Stat.Value>
          </Stat>
        )}

        {!!books.length &&
          books.map(book => (
            <Stat mt={2} key={book.name}>
              <Stat.Value width={1}>
                <em>{book.name}</em>, {book.author}
              </Stat.Value>
            </Stat>
          ))}
      </Box>
    </>
  )
}

export default Stats
