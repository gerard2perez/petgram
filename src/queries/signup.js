/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: signup.js
Created:  2022-05-25T02:50:57.599Z
Modified: 2022-05-25T03:11:30.707Z
*/

import { gql } from '@apollo/client'
export const SIGNUP = gql`
mutation signup($input: UserCredentials!) {
  signup(input: $input)
}
`
