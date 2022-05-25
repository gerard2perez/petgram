/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-23T15:56:08.734Z
Modified: 2022-05-25T04:58:10.832Z
*/

import React, { useContext } from 'react'
import { AppContext } from '../context/app-context'
import { NotRegisteredUser } from '../pages/not-registered-user'

export const ProtectedRoute = ({ children }) => {
  const { state: { token } } = useContext(AppContext)
  return token ? children : <NotRegisteredUser/>
}
