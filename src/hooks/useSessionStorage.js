/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useSessionStorage.js
Created:  2022-05-25T04:48:23.613Z
Modified: 2022-05-25T04:59:13.957Z
*/
import { useState } from 'react'

export function useSessionStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item === null ? initialValue : JSON.parse(item)
    } catch (e) {
      return initialValue
    }
  })
  const setSessionStorage = (value) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
    setStoredValue(value)
  }
  return [storedValue, setSessionStorage]
}
