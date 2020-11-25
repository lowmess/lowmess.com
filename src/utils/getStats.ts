/* eslint-disable import/exports-last */

type Album = {
	name: string
	artist: string
}

export type Book = {
	name: string
	author: string
}

export type Stats = {
	commits?: number
	tweets?: number
	places?: number
	steps?: number
	songs?: number
	album?: Album
	books?: Array<Book>
}

const getStats = async (): Promise<Stats> => {
	const query = `
      query Stats {
        commits
        tweets
        places
        steps
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
		return {}
	}
}

export default getStats
