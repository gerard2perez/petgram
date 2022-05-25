/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-23T14:40:53.039Z
Modified: 2022-05-23T15:24:19.464Z
*/

import React from 'react'
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md'
import { Nav, NavLink } from './styles'
const SIZE = '32px'
export const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/"><MdHome size={SIZE}/></NavLink>
      <NavLink to="/favs"><MdFavoriteBorder size={SIZE}/></NavLink>
      <NavLink to="/user"><MdPersonOutline size={SIZE}/></NavLink>
    </Nav>
  )
}
