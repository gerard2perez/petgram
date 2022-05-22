/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: photos.js
Created:  2022-05-22T18:28:36.672Z
Modified: 2022-05-22T18:29:11.456Z
*/
import { gql } from '@apollo/client'
export const GET_PHOTOS_BY_CATEGORY = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
