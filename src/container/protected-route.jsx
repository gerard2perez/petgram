/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-23T15:56:08.734Z
Modified: 2022-05-26T03:19:52.737Z
*/

import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/app-context'

export const ProtectedRoute = ({ children, redirect }) => {
  const { state: { token } } = useContext(AppContext)
  return token ? children : <Navigate to={redirect}/>
}
