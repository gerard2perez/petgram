/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T02:53:20.673Z
Modified: 2022-05-22T19:40:42.111Z
*/

import { useMutation } from '@apollo/client'
import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useOnScreen } from '../../hooks/useOnScreen'
import { LIKE_ANONYMOUS_PHOTO } from '../../queries/like-anonymous-photo'
import { FavButton } from '../fav-button'
import { Article, Img, ImgWrapper } from './styles'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, element } = useOnScreen()
  const [toggleLike] = useMutation(LIKE_ANONYMOUS_PHOTO)
  const key = `liked-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const handleFavClick = () => {
    !liked && toggleLike({ variables: { input: { id } } })
    setLiked(!liked)
  }
  return (
    <Article ref={element}>
      {show && <>
        <a href={`?detail=${id}`}>
          <ImgWrapper>
            <Img src={src}/>
          </ImgWrapper>
        </a>
        <FavButton onClick={handleFavClick} likes={likes} liked={liked} />
      </>}

    </Article>
  )
}
