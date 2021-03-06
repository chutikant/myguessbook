import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"
import { setContext } from 'apollo-link-context';

//1
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
//import { HttpLink } from 'apollo-link-http';

import 'isomorphic-unfetch';

function applyWsLink(httpLink) {
  
  if(!process.browser) {
    return httpLink
  }
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:3000/subscriptions`,
    options: {
      reconnect: true
    }
  })

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  return link
}

function createApolloClient(store, initialState = {}) {
  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql'
  })

  const authLink = setContext((_, { headers }) => {
    if(!store) {
      return {headers}
    }
    const state = store.getState()
    const token = state.auth.token
    if (!token) {
      return {}
    }

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : "",
      }
    }
  });

  //Apply
  const link = applyWsLink(authLink.concat(httpLink))

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache().restore(initialState)
  });


  return client
}

export default createApolloClient