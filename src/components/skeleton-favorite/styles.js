/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-25T17:22:29.256Z
Modified: 2022-05-25T17:24:07.351Z
*/
import styled from 'styled-components'
import { skeletonStyle } from '../../styles/animation'
export const SkeletonFavorite = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  ${skeletonStyle(false)}
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
