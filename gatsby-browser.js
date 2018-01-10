import React from 'react'
import { Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://stats-pzrqiaginh.now.sh/graphql',
    method: 'POST',
  }),
  cache: new InMemoryCache(),
})

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <ApolloProvider client={client}>
      <Router history={history}>{children}</Router>
    </ApolloProvider>
  )

  return ConnectedRouterWrapper
}
