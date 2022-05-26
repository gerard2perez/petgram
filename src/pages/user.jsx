/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: user.jsx
Created:  2022-05-23T15:06:06.805Z
Modified: 2022-05-26T04:37:04.742Z
*/

import React, { useContext } from 'react'
import { SubmitButton } from '../components/submit-button'
import { AppContext } from '../context/app-context'

export default function User () {
  const { localLogOut } = useContext(AppContext)
  return <>
    <h1>User</h1>
    <SubmitButton onClick={localLogOut}> Close session</SubmitButton>
  </>
}
