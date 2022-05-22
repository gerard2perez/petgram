/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T01:55:05.818Z
Modified: 2022-05-22T02:01:02.134Z
*/

import React from 'react'
import { Category } from '../category'
import { Item, List } from './styles'
export const ListOfCategories = () => {
  return (
    <List>
      {
        [1,2,3,4].map((id) =>(
        <Item key={id}><Category/></Item>
        ))
      }
    </List>
  )
}
