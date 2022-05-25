/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useInitialState.js
Created:  2022-05-23T15:21:33.679Z
Modified: 2022-05-25T04:40:50.399Z
*/

import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { SIGNIN } from '../queries/signin'
import { SIGNUP } from '../queries/signup'

export function useInitialState (initialState) {
  const [state, setState] = useState(initialState)
  const [signup, signUpMeta] = useMutation(SIGNUP)
  const [signin, signInMeta] = useMutation(SIGNIN)
  const authenticate = async (input) => {
    await signin({ variables: { input } })
    setState({ ...state, isAuth: true })
  }
  const register = async (input) => {
    await signup({ variables: { input } })
    setState({ ...state, isAuth: true })
  }
  return { state, authenticate: [authenticate, signInMeta], register: [register, signUpMeta] }
}
