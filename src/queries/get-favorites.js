/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: get-favorites.js
Created:  2022-05-25T06:25:29.958Z
Modified: 2022-05-25T06:25:55.950Z
*/

import { gql } from '@apollo/client'

export const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
