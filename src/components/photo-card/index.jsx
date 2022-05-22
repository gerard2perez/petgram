/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T02:53:20.673Z
Modified: 2022-05-22T03:17:29.358Z
*/

import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { Article, Button, Img, ImgWrapper } from './styles'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  return (
    <Article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src}/>
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px'/> {likes} likes!
      </Button>
    </Article>
  )
}
