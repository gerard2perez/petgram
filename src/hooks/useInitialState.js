/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useInitialState.js
Created:  2022-05-23T15:21:33.679Z
Modified: 2022-05-25T20:20:02.363Z
*/

import { useApolloClient, useMutation } from '@apollo/client'
import { useState } from 'react'
import { SIGNIN } from '../queries/signin'
import { SIGNUP } from '../queries/signup'
import { useSessionStorage } from './useSessionStorage'

export function useInitialState () {
  console.log('re-render inital state')
  const [sessionToken, setSessionToken] = useSessionStorage('current-user', null)
  const [state, setState] = useState({
    token: sessionToken
  })
  const apollo = useApolloClient()
  console.log('apollo', apollo)
  const [signup, signUpMeta] = useMutation(SIGNUP)
  const [signin, signInMeta] = useMutation(SIGNIN)
  const activateAuth = (token) => {
    setSessionToken(token)
    setState({ ...state, token })
  }
  const authenticate = async (input) => {
    const { data: { login: token } } = await signin({ variables: { input } })
    activateAuth(token)
  }
  const register = async (input) => {
    const { data: { signup: token } } = await signup({ variables: { input } })
    activateAuth(token)
  }
  const localLogOut = async () => {
    console.log('triggers logout')
    await apollo.resetStore()
    setSessionToken(undefined)
    setState({ ...state, token: undefined })
  }
  return { localLogOut, state, authenticate: [authenticate, signInMeta], register: [register, signUpMeta] }
}
