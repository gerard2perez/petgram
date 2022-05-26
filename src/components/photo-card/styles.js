/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-22T02:56:10.652Z
Modified: 2022-05-26T01:40:17.383Z
*/

import styled from 'styled-components'
import { fadeIn, skeletonStyle } from '../../styles/animation'
export const Article = styled.article`
margin-bottom: 10px;
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
  width: 100%;
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

export const SkeletonPhotoCard = styled.article`
  margin: 10px;
  box-shadow: 1px 1px 5px 0px #999;
  border-radius: 8px;
  min-height: 200px;
  ${skeletonStyle(false)}
`
