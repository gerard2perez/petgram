/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-25T20:27:57.425Z
Modified: 2022-05-26T14:29:40.870Z
*/

import PropTypes from 'prop-types'
import React from 'react'
import { Button } from './styles'
export const SubmitButton = ({ children, onClick, disabled, ...props }) => {
  return (
    <Button disabled={disabled} onClick={onClick} {...props}>{children}</Button>
  )
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
