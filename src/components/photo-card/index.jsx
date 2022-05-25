/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T02:53:20.673Z
Modified: 2022-05-25T05:57:06.740Z
*/

import { useMutation } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import { useOnScreen } from '../../hooks/useOnScreen'
import { LIKE_PHOTO } from '../../queries/like-photo'
import { FavButton } from '../fav-button'
import { Article, Img, ImgWrapper } from './styles'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, element } = useOnScreen()
  const [toggleLike] = useMutation(LIKE_PHOTO)

  const handleFavClick = () => {
    toggleLike({ variables: { input: { id } } })
  }
  return (
    <Article ref={element}>
      {show && <>
        <Link to={`/pet/${id}`}>
          <ImgWrapper>
            <Img src={src}/>
          </ImgWrapper>
        </Link>
        <FavButton onClick={handleFavClick} likes={likes} liked={liked} />
      </>}

    </Article>
  )
}
