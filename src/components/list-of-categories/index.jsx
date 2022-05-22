/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T01:55:05.818Z
Modified: 2022-05-22T15:07:32.580Z
*/

import React, { useEffect, useState } from 'react'
import { Category } from '../category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [ showFixed, setShowFixed] = useState(0)
  useEffect(()=>{
    fetch('https://petgram-server-g2p.vercel.app/categories')
    .then(res=>res.json())
    .then(response => setCategories(response));
  }, [])
  useEffect(()=>{
    const onScroll = e => {
      const newShowFixed = window.scrollY > 150
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])
  function renderList(fixed) {
    return <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <Item key={category.id}><Category {...category} /></Item>
      ))}
    </List>
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}


