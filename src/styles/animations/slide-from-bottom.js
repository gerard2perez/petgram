/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: slide-from-bottom.js
Created:  2022-05-25T03:45:19.155Z
Modified: 2022-05-25T03:51:57.771Z
*/
import { css, keyframes } from 'styled-components'

const slideFromBottomKeyFrames = keyframes`
  0% {
    transform: translateY(80px);
  }
  70% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0px);
  }
`
export const slideFromBottom = ({ time = '1s', type = 'ease' } = {}) => css` animation: ${time} ${slideFromBottomKeyFrames} ${type};`
