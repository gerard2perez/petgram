/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-26T01:31:03.285Z
Modified: 2022-05-26T03:41:11.341Z
*/

import styled from 'styled-components'

export const Div = styled.div`
  padding: 16px;
  &.fill{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: calc(100vh - 130px);
  }
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  padding-bottom: 8px;
`
export const Subtitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  padding-bottom: 4px;
`
