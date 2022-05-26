/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: animation.js
Created:  2022-05-22T03:38:17.847Z
Modified: 2022-05-26T03:12:59.808Z
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
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css` animation: ${time} ${fadeInKeyFrames} ${type};`

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
export const slideFromTop = ({ time = '1s', type = 'ease' } = {}) => css` animation: ${time} ${slideFromTopKeyFrames} ${type};`

const rippleKeyFrames = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

export const ldsRipple = ({ time = '1s', type = 'cubic-bezier(0, 0.2, 0.8, 1)' } = {}) => css` animation: ${time} ${rippleKeyFrames} ${type} infinite;`

const skeletonBackground = (light) => (
  css`
      background: ${!light
    ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
    : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
          background-size: 400% 400%;
          animation: ${skeletonLoading} 1.2s ease-in-out infinite;
  `
)

const skeletonLoading = keyframes`
  from {
      background-position: 0% 0%;
  }
  to {
      background-position: -135% 0%;
  }
`

export const skeletonStyle = (light = true) => skeletonBackground(light)
