/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T01:55:05.818Z
Modified: 2022-05-22T14:37:09.774Z
*/

import React, { useEffect, useState } from 'react'
import { Category } from '../category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, useCategories] = useState([])
  useEffect(()=>{
    fetch('https://petgram-server-g2p.vercel.app/categories')
    .then(res=>res.json())
    .then(response => useCategories(response));
  }, [])
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
