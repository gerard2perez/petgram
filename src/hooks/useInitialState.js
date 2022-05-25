/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useInitialState.js
Created:  2022-05-23T15:21:33.679Z
Modified: 2022-05-23T15:35:34.001Z
*/

import { useState } from 'react'

export function useInitialState (initialState) {
  const [state, setState] = useState(initialState)
  const authenticate = () => {
    setState({ ...state, isAuth: true })
  }
  return { state, authenticate }
}
