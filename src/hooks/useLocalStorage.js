/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useLocalStorage.js
Created:  2022-05-22T17:44:54.392Z
Modified: 2022-05-23T18:16:44.603Z
*/

import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item === null ? initialValue : JSON.parse(item)
    } catch (e) {
      return initialValue
    }
  })
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
    setStoredValue(value)
  }
  return [storedValue, setLocalStorage]
}
