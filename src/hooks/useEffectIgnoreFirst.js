/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useEffectIgnoreFirst.js
Created:  2022-05-25T01:27:36.381Z
Modified: 2022-05-25T01:28:01.960Z
*/

import { useEffect, useRef } from 'react'

export function useEffectIgnoreFirst (fn, inputs) {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
      return fn()
    }
    didMountRef.current = true
  }, inputs)
}
