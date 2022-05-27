/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-23T14:40:53.039Z
Modified: 2022-05-27T22:33:54.947Z
*/

import React from 'react'
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md'
import { Nav, NavLink } from './styles'
const SIZE = '32px'
export const NavBar = () => {
  return (
    <Nav>
      <NavLink aria-label='Home' to="/"><MdHome size={SIZE}/></NavLink>
      <NavLink aria-label='Favorites' to="/favs"><MdFavoriteBorder size={SIZE}/></NavLink>
      <NavLink aria-label='User' to="/user"><MdPersonOutline size={SIZE}/></NavLink>
    </Nav>
  )
}
