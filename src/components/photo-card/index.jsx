/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T02:53:20.673Z
Modified: 2022-05-22T18:00:35.905Z
*/

import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useOnScreen } from '../../hooks/useOnScreen'
import { Article, Button, Img, ImgWrapper } from './styles'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, element } = useOnScreen()

  const key = `liked-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show && <>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src}/>
          </ImgWrapper>
        </a>
        <Button onClick={() => setLiked(!liked)}>
          <Icon size='32px'/> {likes} likes!
        </Button>
      </>}

    </Article>
  )
}
