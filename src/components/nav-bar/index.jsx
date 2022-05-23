/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-23T14:40:53.039Z
Modified: 2022-05-23T14:50:16.426Z
*/

import React from 'react'
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md'
import { Link, Nav } from './styles'
const SIZE = '32px'
export const NavBar = () => {
  return (
    <Nav>
      <Link to="/"><MdHome size={SIZE}/></Link>
      <Link to="/favs"><MdFavoriteBorder size={SIZE}/></Link>
      <Link to="/uer"><MdPersonOutline size={SIZE}/></Link>
    </Nav>
  )
}
