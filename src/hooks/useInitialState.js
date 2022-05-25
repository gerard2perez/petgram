/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useInitialState.js
Created:  2022-05-23T15:21:33.679Z
Modified: 2022-05-25T05:00:04.790Z
*/

import { useMutation } from '@apollo/client'
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
  const [signup, signUpMeta] = useMutation(SIGNUP)
  const [signin, signInMeta] = useMutation(SIGNIN)
  const activateAuth = (token) => {
    console.log({ token })
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
  return { state, authenticate: [authenticate, signInMeta], register: [register, signUpMeta] }
}
