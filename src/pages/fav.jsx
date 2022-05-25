/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: fav.jsx
Created:  2022-05-23T15:05:48.345Z
Modified: 2022-05-25T18:01:07.592Z
*/

import { useQuery } from '@apollo/client'
import React from 'react'
import { ListOfFavorites } from '../components/list-of-favs'
import { GET_FAVORITES } from '../queries/get-favorites'

export const Favs = () => {
  const { data, loading, error } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })

  return (<>
    <h1>Favorite</h1>
    <ListOfFavorites loading={loading} error={error} favs={data?.favs}/>
  </>)
}
