/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-22T01:58:17.668Z
Modified: 2022-05-27T21:37:53.474Z
*/

import styled, { css } from 'styled-components'
import { slideFromTop } from '../../styles/animation'
export const List = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  /* position: sticky; */
  top: 80px;
  z-index: 10;
  background: white;
  padding-bottom: 10px;
  transition: opacity 250ms ease-in-out;
  ${props => props.fixed && css`
  {
    background: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    margin: 0 auto;
    max-width: 500px;
    position: sticky;
    top: 55px;
    transform: translateY(-5px) scale(0.7);
    z-index: 9;
    padding: 8px 10px;
    ${slideFromTop({ time: '300ms', type: 'ease-out' })}
  }
  `}
  ${props => props.hidden && css`
    opacity: 0;
  `}
`
export const Item = styled.li`
  padding: 0 8px;
`
