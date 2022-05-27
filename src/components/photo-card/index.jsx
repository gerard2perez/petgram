/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T02:53:20.673Z
Modified: 2022-05-27T22:31:40.635Z
*/
import { useMutation } from '@apollo/client'
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useOnScreen } from '../../hooks/useOnScreen'
import { LIKE_PHOTO } from '../../queries/like-photo'
import { FavButton } from '../fav-button'
import { Article, Img, ImgWrapper } from './styles'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, element } = useOnScreen()
  const [toggleLike] = useMutation(LIKE_PHOTO)
  const navigate = useNavigate()

  const handleFavClick = () => {
    toggleLike({ variables: { input: { id } } })
      .catch(_ => navigate('/login'))
  }
  return (
    <Article ref={element}>
      {show && <>
        <Link to={`/pet/${id}`}>
          <ImgWrapper>
            <Img src={src} alt={`pet ${id}`}/>
          </ImgWrapper>
        </Link>
        <FavButton onClick={handleFavClick} likes={likes} liked={liked} />
      </>}

    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
