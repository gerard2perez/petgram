/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T01:55:05.818Z
Modified: 2022-05-22T17:15:21.454Z
*/

import React, { useEffect, useState } from 'react'
import { Category } from '../category'
import { SkeletonCategory } from '../category/skeleton'
import { Item, List } from './styles'
function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch('https://petgram-server-g2p.vercel.app/categories')
    .then(res=>res.json())
    .then(response => {
      setCategories(response)
      setLoading(false)
    });
  }, [])
  return {categories, loading}
}
export const ListOfCategories = () => {
  const {categories, loading} = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(()=>{
    const onScroll = e => {
      const newShowFixed = window.scrollY > 150
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  function renderList(fixed) {
    return <List fixed={fixed}>
      {loading ? [1,2,3,4].map(id => (<Item key={id}><SkeletonCategory/></Item>)) :
      categories.map((category) => (
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


