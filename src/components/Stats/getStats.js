import fetch from 'unfetch'

const getStats = () => {
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

  return fetch('https://lowmess-stats.now.sh/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }

      return response.json()
    })
    .then(json => json.data)
    .catch(error => {
      console.error(error)
    })
}

export default getStats
