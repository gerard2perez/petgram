/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: photo-card-with-query.jsx
Created:  2022-05-22T19:02:03.551Z
Modified: 2022-05-22T19:12:11.488Z
*/

import { useQuery } from '@apollo/client'
import { PhotoCard } from '../components/photo-card'
import { SkeletonPhotoCard } from '../components/photo-card/styles'
import { GET_PHOTO_BY_ID } from '../queries/getSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data: { photo = {} } = {} } = useQuery(GET_PHOTO_BY_ID, { variables: { id } })
  if (error) {
    return <h1>{error}</h1>
  }
  return loading ? <SkeletonPhotoCard/> : <PhotoCard {...photo}/>
}
