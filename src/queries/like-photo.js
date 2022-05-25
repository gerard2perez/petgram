/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: like-anonymous-photo.js
Created:  2022-05-22T19:23:51.838Z
Modified: 2022-05-25T05:51:19.997Z
*/
import { gql } from '@apollo/client'
export const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
