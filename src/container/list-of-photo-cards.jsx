/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-22T03:03:06.527Z
Modified: 2022-05-22T18:52:50.827Z
*/

import { useQuery } from '@apollo/client'
import React from 'react'
import { PhotoCard } from '../components/photo-card'
import { PhotoCardSkeleton } from '../components/photo-card/skeleton'
import { GET_PHOTOS_BY_CATEGORY } from '../queries/photos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data: { photos = [1, 2, 3] } = {} } = useQuery(GET_PHOTOS_BY_CATEGORY, { variables: { categoryId } })
  if (error) return <p>Error :(</p>
  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          {loading ? <PhotoCardSkeleton/> : <PhotoCard {...photo}/>}
        </li>
      ))}
    </ul>
  )
}
