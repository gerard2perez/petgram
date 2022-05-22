/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: getSinglePhoto.js
Created:  2022-05-22T18:56:32.106Z
Modified: 2022-05-22T19:12:07.641Z
*/

import { gql } from '@apollo/client'
export const GET_PHOTO_BY_ID = gql`
query getSinglePhoto($id: ID!) {
  photo(id: $id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
