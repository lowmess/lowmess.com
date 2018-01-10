import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Stat from './Stat'

const Stats = ({ data }) => {
  let Commits = '—'
  let Steps = '—'
  let Songs = '—'
  let Album = '—'
  let Book = '—'

  if (!data.loading) {
    // Update commits if exists
    if (data.commits) Commits = data.commits.toLocaleString()
    // Update steps if exists
    if (data.steps) Steps = data.steps.toLocaleString()
    // Update songs if exists
    if (data.songs) Songs = data.songs.toLocaleString()
    // Update album if exists
    if (data.album) {
      if (data.album.name && data.album.artist)
        Album = (
          <span>
            <em>{data.album.name}</em>, {data.album.artist}
          </span>
        )
    }
    // Update book if exists
    if (data.book) {
      if (data.book.name && data.book.author)
        Book = (
          <span>
            <em>{data.book.name}</em>, {data.book.author}
          </span>
        )
    }
  }

  return (
    <div>
      <Stat mb={2} title="GitHub Commits">
        {Commits}
      </Stat>
      <Stat mb={2} title="Steps Taken">
        {Steps}
      </Stat>
      <Stat mb={2} title="Songs Played">
        {Songs}
      </Stat>
      <Stat mb={2} title="Top Album">
        {Album}
      </Stat>
      <Stat title="Currently Reading">{Book}</Stat>
    </div>
  )
}

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
