import React, { Component } from 'react'
import { Box, Text } from '../Primitives'
import { Stat, StatTitle, StatValue } from './Stat'
import getStats from './getStats'

class Stats extends Component {
  constructor() {
    super()
    this.state = {
      commits: '—',
      places: '—',
      steps: '—',
      sleep: '—',
      songs: '—',
      album: '—',
      book: '—',
    }
  }

  async componentDidMount() {
    const {
      commits,
      places,
      steps,
      sleep,
      songs,
      album,
      book,
    } = await getStats()

    if (commits) {
      this.setState({
        commits: commits.toLocaleString(),
      })
    }

    if (places) {
      this.setState({
        places: places.toLocaleString(),
      })
    }

    if (steps) {
      this.setState({
        steps: steps.toLocaleString(),
      })
    }

    if (sleep) {
      this.setState({
        sleep: parseFloat(sleep.toFixed(2)).toLocaleString(),
      })
    }

    if (songs) {
      this.setState({
        songs: songs.toLocaleString(),
      })
    }

    if (album.name && album.artist) {
      const albumComponent = (
        <span>
          <em>{album.name}</em>, {album.artist}
        </span>
      )
      this.setState({ album: albumComponent })
    }

    if (book.name && book.author) {
      const bookComponent = (
        <span>
          <em>{book.name}</em>, {book.author}
        </span>
      )
      this.setState({ book: bookComponent })
    }
  }

  render() {
    return (
      <Box {...this.props}>
        <Text is="h2" fontSize={[3, 4]} mt={0} mb={4}>
          In the Last 30 Days
        </Text>

        <Stat mb={2}>
          <StatTitle>GitHub Commits</StatTitle>
          <StatValue>{this.state.commits}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Places Visited</StatTitle>
          <StatValue>{this.state.places}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Steps Taken</StatTitle>
          <StatValue>{this.state.steps}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Hours Slept</StatTitle>
          <StatValue>{this.state.sleep}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Songs Played</StatTitle>
          <StatValue>{this.state.songs}</StatValue>
        </Stat>

        <Stat mb={2}>
          <StatTitle>Top Album</StatTitle>
          <StatValue>{this.state.album}</StatValue>
        </Stat>

        <Stat>
          <StatTitle>Currently Reading</StatTitle>
          <StatValue>{this.state.book}</StatValue>
        </Stat>
      </Box>
    )
  }
}

export default Stats
