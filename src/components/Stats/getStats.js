import fetch from 'unfetch'

const getStats = async () => {
  const query = `
      query Stats {
        commits
        tweets
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

  const response = await fetch('https://stats.lowmess.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    console.error(`${response.status}: ${response.statusText}`)
    return false
  }

  const { data } = await response.json()

  return data
}

export default getStats
