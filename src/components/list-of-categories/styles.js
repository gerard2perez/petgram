/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-22T01:58:17.668Z
Modified: 2022-05-22T03:31:25.931Z
*/

import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  position: sticky;
  top: 80px;
  z-index: 10;
  background: white;
  padding-bottom: 10px;
`
export const Item = styled.li`
  padding: 0 8px;
`
