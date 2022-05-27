/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: home.jsx
Created:  2022-05-22T19:47:02.294Z
Modified: 2022-05-26T04:24:34.737Z
*/

import React from 'react'
import { useParams } from 'react-router'
import { Layout } from '../components/layout'
import { ListOfCategories } from '../components/list-of-categories'
import { ListOfPhotoCards } from '../container/list-of-photo-cards'
const HomePage = () => {
  const { categoryId } = useParams()
  return (
    <Layout append={false} title='Your pet photo app' subtitle='With petgram you can find your favorite pet photos' >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}
// eslint-disable-next-line react/display-name
export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
