/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: animation.js
Created:  2022-05-22T03:38:17.847Z
Modified: 2022-05-22T15:33:57.918Z
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


const slideFromTopKeyFrames = keyframes`
  0% {
    transform: translateY(-80px) scale(0.7);
  }
  50% {
    transform: translateY(-5px) scale(0.7);
  }
  80% {
    transform: translateY(-2px) scale(0.7);
  }
  93% {
    transform: translateY(-3px) scale(0.7);
  }
  100% {
    transform: translateY(-5px) scale(0.7);
  }
`
export const slideFromTop = ({time = '1s', type = 'ease'} = {}) => css` animation: ${time} ${slideFromTopKeyFrames} ${type};`
