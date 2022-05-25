/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-25T20:28:04.018Z
Modified: 2022-05-25T20:28:39.010Z
*/
import styled from 'styled-components'
export const Button = styled.button`
  background-image: linear-gradient(to right, #f0f, #0ff);
  color: white;
  padding: 10px 50px;
  border-radius: 3px;
  width: 100%;
  margin: 10px 0px;
  &[disabled] {
    filter: blur(1px);
    opacity: 0.3;
  }
`
