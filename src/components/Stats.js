import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Stat from './Stat'

const Stats = ({ data }) => (
  <div>
    <Stat mb={3} title="GitHub Commits">
      {data.loading || !data.commits ? '—' : data.commits.toLocaleString()}
    </Stat>
    <Stat mb={3} title="Steps Taken">
      {data.loading || !data.steps ? '—' : data.steps.toLocaleString()}
    </Stat>
    <Stat mb={3} title="Songs Played">
      {data.loading || !data.songs ? '—' : data.songs.toLocaleString()}
    </Stat>
    <Stat mb={3} title="Top Album">
      {data.loading ||
      !data.album.hasOwnProperty('name') ||
      !data.album.hasOwnProperty('artist') ? (
        '—'
      ) : (
        <span>
          <em>{data.album.name}</em>, {data.album.artist}
        </span>
      )}
    </Stat>
    <Stat title="Currently Reading">
      {data.loading ||
      !data.book.hasOwnProperty('name') ||
      !data.book.hasOwnProperty('author') ? (
        '—'
      ) : (
        <span>
          <em> {data.book.name}</em>, {data.book.author}
        </span>
      )}
    </Stat>
  </div>
)

export default graphql(gql`
  query Stats {
    commits
    steps
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
`)(Stats)
