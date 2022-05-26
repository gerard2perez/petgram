/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: details.jsx
Created:  2022-05-23T14:17:40.964Z
Modified: 2022-05-26T01:27:26.104Z
*/

import React from 'react'
import { useParams } from 'react-router'
import { Layout } from '../components/layout'
import { PhotoCardWithQuery } from '../container/photo-card-with-query'
export const Detail = () => {
  const { petId } = useParams()
  return <Layout title={`Photo ${petId}`}>
    <PhotoCardWithQuery id={petId}/>
  </Layout>
}
