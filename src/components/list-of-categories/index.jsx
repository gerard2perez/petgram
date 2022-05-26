/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T01:55:05.818Z
Modified: 2022-05-26T04:11:58.102Z
*/

import React, { memo, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/app-context'
import { autoGentIdArray } from '../../utils/auto-gen-id-array'
import { Category } from '../category'
import { SkeletonCategory } from '../category/skeleton'
import { Item, List } from './styles'
function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-g2p.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}
function renderList ({ hidden, categories, fixed = false, loading }) {
  return <List fixed={fixed} hidden={hidden}>
    {categories.map(category => (
      <Item key={category.id}>
        {loading ? <SkeletonCategory/> : <Category {...category} path={`/pets/${category.id}`} />}
      </Item>
    ))}
  </List>
}
export const ListOfCategoriesComponent = () => {
  const { categories: _categories, loading } = useCategoriesData()
  const { scrollLimitReached } = useContext(AppContext)
  const categories = loading ? autoGentIdArray(6) : _categories
  return (
    <>
      {renderList({ hidden: scrollLimitReached, loading, categories })}
      {scrollLimitReached && renderList({ fixed: true, loading, categories })}
    </>
  )
}

export const ListOfCategories = memo(ListOfCategoriesComponent)
