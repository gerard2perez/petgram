/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: home.jsx
Created:  2022-05-22T19:47:02.294Z
Modified: 2022-05-23T14:39:07.603Z
*/

import { useParams } from 'react-router'
import { ListOfCategories } from '../components/list-of-categories'
import { ListOfPhotoCards } from '../container/list-of-photo-cards'

export const Home = () => {
  const { categoryId } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
