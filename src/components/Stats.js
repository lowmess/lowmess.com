import React, { Component } from 'react'
import fetch from 'unfetch'
import { Box, Text } from './Primitives'
import Stat from './Stat'

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

  componentDidMount() {
    const query = `
      query Stats {
        commits
        places
        steps
        sleep
        songs
        album {
          name
          artist
        }
        book {
          name
          author
        }
      }
  `
    fetch('https://lowmess-stats.now.sh/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        if (json.data) {
          // Update commits if exists
          if (json.data.commits)
            this.setState({
              commits: json.data.commits.toLocaleString(),
            })
          // Update places if exists
          if (json.data.places)
            this.setState({
              places: json.data.places.toLocaleString(),
            })
          // Update steps if exists
          if (json.data.steps)
            this.setState({
              steps: json.data.steps.toLocaleString(),
            })
          // Update sleep if exists
          if (json.data.sleep)
            this.setState({
              sleep: parseFloat(json.data.sleep.toFixed(2)).toLocaleString(),
            })
          // Update songs if exists
          if (json.data.songs)
            this.setState({
              songs: json.data.songs.toLocaleString(),
            })
          // Update album if exists
          if (json.data.album) {
            if (json.data.album.name && json.data.album.artist) {
              const album = (
                <span>
                  <em>{json.data.album.name}</em>, {json.data.album.artist}
                </span>
              )
              this.setState({ album: album })
            }
          }
          // Update book if exists
          if (json.data.book) {
            if (json.data.book.name && json.data.book.author) {
              const book = (
                <span>
                  <em>{json.data.book.name}</em>, {json.data.book.author}
                </span>
              )
              this.setState({ book: book })
            }
          }
        }
      })
  }

  render() {
    return (
      <Box {...this.props}>
        <Text as="h2" fontSize={[3, 4]} mt={0} mb={4}>
          In the Last 30 Days
        </Text>
        <Stat mb={2} title="GitHub Commits">
          {this.state.commits}
        </Stat>
        <Stat mb={2} title="Places Visited">
          {this.state.places}
        </Stat>
        <Stat mb={2} title="Steps Taken">
          {this.state.steps}
        </Stat>
        <Stat mb={2} title="Hours Slept">
          {this.state.sleep}
        </Stat>
        <Stat mb={2} title="Songs Played">
          {this.state.songs}
        </Stat>
        <Stat mb={2} title="Top Album">
          {this.state.album}
        </Stat>
        <Stat title="Currently Reading">{this.state.book}</Stat>
      </Box>
    )
  }
}

export default Stats
