/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-25T05:09:37.083Z
Modified: 2022-05-25T05:49:07.753Z
*/
import {
  ApolloClient, from, HttpLink, InMemoryCache
} from '@apollo/client'
import { authMiddleware } from './auth-middleware'
export const URI = new HttpLink({ uri: 'https://petgram-server-g2p.vercel.app/graphql' })
export const apolloClient = new ApolloClient({
  // uri: 'https://petgram-server-g2p.vercel.app/graphql',
  link: from([
    authMiddleware,
    URI
    // new HttpLink('https://petgram-server-g2p.vercel.app/graphql')
  ]),
  cache: new InMemoryCache()
})
