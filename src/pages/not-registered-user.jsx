/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: not-registered-user.jsx
Created:  2022-05-23T15:09:28.159Z
Modified: 2022-05-25T02:16:22.528Z
*/

import React, { useContext } from 'react'
import { UserForm } from '../components/user-from'
import { AppContext } from '../context/app-context'

export const NotRegisteredUser = () => {
  const { authenticate } = useContext(AppContext)
  return <UserForm onSubmit={authenticate} />
}
