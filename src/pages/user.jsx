/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: user.jsx
Created:  2022-05-23T15:06:06.805Z
Modified: 2022-05-26T04:56:11.545Z
*/

import React, { useContext } from 'react'
import { Layout } from '../components/layout'
import { SubmitButton } from '../components/submit-button'
import { AppContext } from '../context/app-context'

export default function User () {
  const { localLogOut } = useContext(AppContext)
  return <Layout title='User Information'>
    <SubmitButton onClick={localLogOut}> Close session</SubmitButton>
  </Layout>
}
