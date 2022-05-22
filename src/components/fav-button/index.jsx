/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-22T19:17:00.289Z
Modified: 2022-05-22T19:31:27.200Z
*/
import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px'/> {likes} likes!
    </Button>
  )
}
