/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-21T22:28:19.797Z
Modified: 2022-05-23T15:20:30.089Z
*/

import { ApolloProvider } from '@apollo/client'
import { createRoot } from 'react-dom/client'
import { apolloClient } from './apollo'
import { App } from './App'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ApolloProvider client={apolloClient}>
    <App/>
  </ApolloProvider>
)
