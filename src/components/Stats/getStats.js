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

  try {
    const response = await fetch('https://stats.lowmess.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }

    const { data } = await response.json()

    return data
  } catch (error) {
    console.error(error.message ? error.message : error)
    return false
  }
}

export default getStats
