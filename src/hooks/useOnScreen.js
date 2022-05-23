/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: useOnScreen.js
Created:  2022-05-22T17:46:01.452Z
Modified: 2022-05-22T20:10:25.199Z
*/
import { useEffect, useRef, useState } from 'react'
export function useOnScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])
  return { show, element }
}
