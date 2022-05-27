/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: not-registered-user.jsx
Created:  2022-05-23T15:09:28.159Z
Modified: 2022-05-26T03:23:49.451Z
*/

import React, { useContext } from 'react'
import { Layout } from '../components/layout'
import { UserForm } from '../components/user-from'
import { AppContext } from '../context/app-context'
import { useGetLabels } from '../hooks/useGetLabels'

export default function NotRegisteredUser () {
  const labels = useGetLabels()
  const { signin } = labels
  const { authenticate, register } = useContext(AppContext)
  return <Layout append={false} title='Join the community' subtitle='The cutest pet in one site'>
    <UserForm mutation={ signin ? authenticate : register} {...labels} />
  </Layout>
}
