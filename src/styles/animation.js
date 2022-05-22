/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: animation.js
Created:  2022-05-22T03:38:17.847Z
Modified: 2022-05-21T22:28:14.541Z
*/

import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({time = '1s', type = 'ease'} = {}) => css` animation: ${time} ${fadeInKeyFrames} ${type};`
