/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: fav.jsx
Created:  2022-05-23T15:05:48.345Z
Modified: 2022-05-26T01:28:43.341Z
*/

import { useQuery } from '@apollo/client'
import React from 'react'
import { Layout } from '../components/layout'
import { ListOfFavorites } from '../components/list-of-favs'
import { GET_FAVORITES } from '../queries/get-favorites'
export const Favs = () => {
  const { data, loading, error } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })

  return (<Layout title="Your favorites" subtitle='With petgram you can find your favorite pet photos'>
    <ListOfFavorites loading={loading} error={error} favs={data?.favs}/>
  </Layout>)
}
