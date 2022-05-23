/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-23T14:42:13.839Z
Modified: 2022-05-23T15:04:21.890Z
*/

import { NavLink as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'
export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  z-index: 100;
`
export const NavLink = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: ".";
      position: absolute;
      bottom: 5px;
      font-size: 32px;
      line-height: 20px;
    }
  }
`
