/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T01:55:05.818Z
Modified: 2022-05-22T02:50:00.305Z
*/

import React from 'react'
import db from '../../../api/db.json'
import { Category } from '../category'
import { Item, List } from './styles'
console.log(db)
export const ListOfCategories = () => {
  const categories = db.categories
  return (
    <List>
      {
        categories.map((category) =>(
        <Item key={category.id}><Category {...category}/></Item>
        ))
      }
    </List>
  )
}
