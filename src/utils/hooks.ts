import { useStaticQuery, graphql } from 'gatsby'

type Metadata = {
  title: string
  description: string
  siteUrl: string
}

const useSiteMetadata = (): Metadata => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return site.siteMetadata
}

export { useSiteMetadata }
