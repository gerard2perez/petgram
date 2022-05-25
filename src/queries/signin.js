/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: signin.js
Created:  2022-05-25T04:34:39.098Z
Modified: 2022-05-25T04:35:03.841Z
*/

import { gql } from '@apollo/client'
export const SIGNIN = gql`
mutation login($input: UserCredentials!) {
  login(input: $input)
}
`
