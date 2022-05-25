/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useGetLabels.js
Created:  2022-05-25T01:30:04.346Z
Modified: 2022-05-25T02:08:50.607Z
*/

import { useLocation } from 'react-router'

export const useGetLabels = () => {
  const location = useLocation()
  const hash = location.hash.replace('#', '') || 'signin'
  const invHash = { signin: 'signup', signup: 'signin' }[hash]
  const title = {
    signin: 'Sign up',
    signup: 'Sign in'
  }
  return {
    signin: hash === 'signin',
    hash,
    invHash,
    title: title[hash],
    invTitle: title[invHash]
  }
}
