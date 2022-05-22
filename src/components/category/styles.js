/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-22T01:41:58.331Z
Modified: 2022-05-22T17:05:04.294Z
*/

import styled from 'styled-components'
import { ldsRipple } from '../../styles/animation'

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  /* width: 75px; */
`
export const DecorateImage = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background-image: linear-gradient(#405de6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  box-sizing: border-box;
  border: 3px solid white;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 72px;
  width: 72px;
`
export const Skeleton = styled.div`
  display: inline-block;
  position: relative;
  width: 72px;
  height: 72px;
  background: #DDD;
  border-radius: 40px;
  border: 3px solid white;
  div {
    transform: translate(-1.5px, -1.5px);
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    ${ldsRipple()}
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`
