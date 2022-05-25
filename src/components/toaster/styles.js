/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-25T03:41:55.663Z
Modified: 2022-05-25T04:25:20.072Z
*/

import styled from 'styled-components'
import { slideFromBottom } from '../../styles/animations/slide-from-bottom'
import { slideOutBottom } from '../../styles/animations/slide-out-from-bottom'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  background-color: #cb1b1b;
  z-index: 9999;
  padding: 5px 10px;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  &.show{
    ${slideFromBottom()}
  }
  &.hide{
    ${slideOutBottom()}
  }
`
export const Content = styled.span`
  flex: 1;
  text-align: center;
`
