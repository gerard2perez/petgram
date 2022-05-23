/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-23T14:40:53.039Z
Modified: 2022-05-23T15:00:37.176Z
*/

import React from 'react'
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md'
import { useLocation } from 'react-router'
import { Nav, NavLink } from './styles'
const SIZE = '32px'
export const NavBar = () => {
  const current = useLocation()
  console.log(current)
  return (
    <Nav>
      <NavLink to="/"><MdHome size={SIZE}/></NavLink>
      <NavLink to="/favs"><MdFavoriteBorder size={SIZE}/></NavLink>
      <NavLink to="/uer"><MdPersonOutline size={SIZE}/></NavLink>
    </Nav>
  )
}
