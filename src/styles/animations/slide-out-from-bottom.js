/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: slide-out-from-bottom.js
Created:  2022-05-25T04:19:02.085Z
Modified: 2022-05-25T04:23:54.614Z
*/

import { css, keyframes } from 'styled-components'

const slideOutToBottom = keyframes`
  0% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(80px);
  }
`
export const slideOutBottom = ({ time = '1s', type = 'ease' } = {}) => css` animation: ${time} ${slideOutToBottom} ${type} forwards;`
