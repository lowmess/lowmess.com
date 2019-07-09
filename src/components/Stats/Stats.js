import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'rebass'
import getStats from './getStats'
import { Stat, StatTitle, StatValue } from './Stat'

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
  const [sleep, setSleep] = useState(null)
  const [songs, setSongs] = useState(null)
  const [album, setAlbum] = useState(null)
  const [books, setBooks] = useState([])

  const fillStats = async () => {
    const {
      commits: commitStat,
      tweets: tweetsStat,
      places: placesStat,
      steps: stepsStat,
      sleep: sleepStat,
      songs: songsStat,
      album: albumStat,
      books: booksStat,
    } = await getStats()

    if (commitStat) setCommits(commitStat.toLocaleString())

    if (tweetsStat) setTweets(tweetsStat.toLocaleString())

    if (placesStat) setPlaces(placesStat.toLocaleString())

    if (stepsStat) setSteps(stepsStat.toLocaleString())

    if (sleepStat) setSleep(parseFloat(sleepStat.toFixed(2)).toLocaleString())

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
          <StatTitle>GitHub Commits</StatTitle>
          <StatValue>{commits || '\u2014'}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Tweets Sent</StatTitle>
          <StatValue>{tweets || '\u2014'}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Places Visited</StatTitle>
          <StatValue>{places || '\u2014'}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Steps Taken</StatTitle>
          <StatValue>{steps || '\u2014'}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Hours Slept</StatTitle>
          <StatValue>{sleep || '\u2014'}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Songs Played</StatTitle>
          <StatValue>{songs || '\u2014'}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Top Album</StatTitle>
          <StatValue>{album || '\u2014'}</StatValue>
        </Stat>
      </Box>

      <Box {...props}>
        <SectionTitle>Currently Reading</SectionTitle>

        {!books.length && (
          <Stat>
            <StatValue width={1}>{'\u2014'}</StatValue>
          </Stat>
        )}

        {!!books.length &&
          books.map(book => (
            <Stat mt={2} key={book.name}>
              <StatValue width={1}>
                <em>{book.name}</em>, {book.author}
              </StatValue>
            </Stat>
          ))}
      </Box>
    </>
  )
}

export default Stats
