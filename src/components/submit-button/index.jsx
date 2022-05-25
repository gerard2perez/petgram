/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-25T20:27:57.425Z
Modified: 2022-05-25T20:30:04.853Z
*/

import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled, ...props }) => {
  return (
    <Button disabled={disabled} onClick={onClick} {...props}>{children}</Button>
  )
}
