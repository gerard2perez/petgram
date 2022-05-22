/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-22T03:03:06.527Z
Modified: 2022-05-22T18:22:35.255Z
*/

import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { PhotoCard } from '../photo-card'
const withPhotos = gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const ListOfPhotoCards = () => {
  const { loading, error, data: { photos = [] } = {} } = useQuery(withPhotos)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoCard {...photo}/>
        </li>
      ))}
    </ul>
  )
}
