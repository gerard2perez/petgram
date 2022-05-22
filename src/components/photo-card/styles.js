/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-22T02:56:10.652Z
Modified: 2022-05-22T17:22:05.418Z
*/

import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'
export const Article = styled.article`
 margin: 10px;
 box-shadow: 1px 1px 5px 0px #999;
 border-radius: 8px;
 min-height: 200px;
`
export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  widows: 100%;
`
export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  ${fadeIn()}
`
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
