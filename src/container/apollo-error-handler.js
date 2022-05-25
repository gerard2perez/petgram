/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: apollo-error-handler.js
Created:  2022-05-25T05:47:06.921Z
Modified: 2022-05-25T20:10:41.722Z
*/

import { from, useApolloClient } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/app-context'
export const ApolloErrorHandler = () => {
  const apollo = useApolloClient()
  const history = useNavigate()
  const { localLogOut } = useContext(AppContext)
  const logOut = () => localLogOut().then(_ => history('/user', { replace: true }))
  const redirectToLogin = onError(({ networkError, graphQLErrors }) => {
    if (networkError && networkError.statusCode === 401) {
      logOut()
    } else if (graphQLErrors && graphQLErrors[0]) {
      logOut()
    }
  })
  apollo.setLink(from([redirectToLogin, apollo.link]))
}