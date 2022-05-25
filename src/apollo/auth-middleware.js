/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: auth-middleware.js
Created:  2022-05-25T05:10:41.597Z
Modified: 2022-05-25T06:16:49.941Z
*/

import { ApolloLink } from '@apollo/client'
export const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem('current-user')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${JSON.parse(token)}`
      }
    })
  }
  return forward(operation)
})
