/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: skeleton.jsx
Created:  2022-05-22T16:26:45.245Z
Modified: 2022-05-22T16:56:09.069Z
*/

import { DecorateImage, Skeleton } from "./styles"

export const SkeletonCategory = () => {
  return<DecorateImage>
    <Skeleton>
      <div></div>
      <div></div>
    </Skeleton>
  </DecorateImage>
}
