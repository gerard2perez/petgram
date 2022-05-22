/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-22T03:03:06.527Z
Modified: 2022-05-22T03:05:33.095Z
*/

import React from 'react'
import db from '../../../api/db.json'
import { PhotoCard } from '../photo-card'
export const ListOfPhotoCards = () => {
  const photos = db.photos
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
