import React from 'react'
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
  const {commits, tweets, places, steps, songs, album: albumStat, books} = getStats()

  const album = albumStat ? <React.Fragment><em>{albumStat.name}</em> by {albumStat.artist}</React.Fragment> : null

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
