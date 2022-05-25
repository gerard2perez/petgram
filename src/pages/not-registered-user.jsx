/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: not-registered-user.jsx
Created:  2022-05-23T15:09:28.159Z
Modified: 2022-05-25T03:13:27.713Z
*/

import React, { useContext } from 'react'
import { UserForm } from '../components/user-from'
import { AppContext } from '../context/app-context'
import { useGetLabels } from '../hooks/useGetLabels'

export const NotRegisteredUser = () => {
  const labels = useGetLabels()
  const { signin } = labels
  const { authenticate, register } = useContext(AppContext)
  return <UserForm onSubmit={ signin ? authenticate : register} {...labels} />
}
