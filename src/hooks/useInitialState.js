/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useInitialState.js
Created:  2022-05-23T15:21:33.679Z
Modified: 2022-05-25T03:17:27.535Z
*/

import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { SIGNUP } from '../queries/signup'

export function useInitialState (initialState) {
  const [state, setState] = useState(initialState)
  const [signup] = useMutation(SIGNUP)
  const authenticate = async (input) => {
    console.log(input)
  }
  const register = async (input) => {
    await signup({ variables: { input } })
    setState({ ...state, isAuth: true })
  }
  return { state, authenticate, register }
}
