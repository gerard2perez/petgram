/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-22T01:41:58.331Z
Modified: 2022-05-23T17:38:06.314Z
*/

import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ldsRipple } from '../../styles/animation'
export const Link = styled(LinkRouter)`
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
  background-image: linear-gradient(#f0f, #0ff);
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
