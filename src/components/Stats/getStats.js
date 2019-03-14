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
        books {
          name
          author
        }
      }
  `

  return fetch('https://stats.lowmess.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
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
