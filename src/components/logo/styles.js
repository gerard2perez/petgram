/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.jsx
Created:  2022-05-22T03:11:20.453Z
Modified: 2022-05-22T20:14:46.874Z
*/

import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
export const Link = styled(LinkRouter)`
display: block;
  position: sticky;
  top: 0px;
  overflow: hidden;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 10;
  transition: height 300ms ease-out;
  &.small {
    height: 60px;
  }
`
export const Svg = styled.svg`
  height: 100%;
  margin-left: -30px;
  margin-top: -10px;

`
