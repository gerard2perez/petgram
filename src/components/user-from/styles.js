/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: styles.js
Created:  2022-05-23T17:27:29.429Z
Modified: 2022-05-25T01:51:21.167Z
*/

import { Field as FField, Form as FForm } from 'formik'
import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'
export const Field = styled(FField)`
  /* border: 5px solid #ccc; */
  border-radius: 3px;
  margin-bottom: 25px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: none;
  /* border-bottom-width: 5px; */
  border: 3px;
  border-style: solid;
  border-image: linear-gradient(to right, #f0f, #0ff) 1;
  border-left-color: white;
  border-width: 0px 0px 2px 0px;
  &:focus {
    /* border-width: 0px 0px 3px 3px; */
  }

`
export const ErrorText = styled.div`
  color: red;
  font-size: 90%;
  margin-bottom: 9px;
  height: 16px;
  margin-top: -25px;
`

export const Form = styled(FForm)`
  margin: 0 auto;
  width: 80%;
  max-width: 400px;
  &.enters {
    ${fadeIn({ time: '250ms' })}
  }
`
export const Button = styled.button`
  background-image: linear-gradient(to right, #f0f, #0ff);
  color: white;
  padding: 10px 50px;
  border-radius: 3px;
  width: 100%;
  margin: 10px 0px;
`
export const Wrapper = styled.div`
  width: 80%;
  max-width: 400px;
`
export const H2 = styled.h2`
  text-align: center;
  color: #f0f;
  font-size: 130%;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const Legend = styled.div`
  text-align: left;
  font-size: 90%;
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 20px;
  a {
    color: #f0f;
    font-size: 110%;
    text-decoration: none;
    margin-left: 10px;
    &:active, &:focus, &:visited {
      text-decoration: none;
    }
  }
`
