/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-22T19:17:41.652Z
Modified: 2022-05-22T19:18:05.129Z
*/
import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  position: relative;
  padding-bottom: 8px;

  z-index: 1;
  & svg {
    margin-left: 5px;
    margin-right: 4px;
    margin-top: -30px;
    border-radius: 50%;
    background: white;
    padding: 5px;
    box-shadow: 1px 1px 7px 0px #999;
  }
`
