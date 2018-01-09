import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Stat from './Stat'

const Stats = ({ data }) => (
  <div>
    <Stat mb={3} title="GitHub Commits">
      {data.loading ? '—' : data.commits.toLocaleString()}
    </Stat>
    <Stat mb={3} title="Steps Taken">
      {data.loading ? '—' : data.steps.toLocaleString()}
    </Stat>
    <Stat mb={3} title="Songs Played">
      {data.loading ? '—' : data.songs.toLocaleString()}
    </Stat>
    <Stat mb={3} title="Top Album">
      {data.loading ? (
        '—'
      ) : (
        <span>
          <em>{data.album.name}</em>, {data.album.artist}
        </span>
      )}
    </Stat>
    <Stat title="Currently Reading">
      {data.loading ? (
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
