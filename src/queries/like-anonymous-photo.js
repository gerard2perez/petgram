/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: like-anonymous-photo.js
Created:  2022-05-22T19:23:51.838Z
Modified: 2022-05-22T19:25:58.306Z
*/
import { gql } from '@apollo/client'
export const LIKE_ANONYMOUS_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
