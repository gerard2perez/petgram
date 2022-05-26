/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: usePageScroll.js
Created:  2022-05-26T02:29:17.241Z
Modified: 2022-05-26T04:30:05.632Z
*/

import { useEffect, useRef, useState } from 'react'

export const usePageScroll = () => {
  const [offset, setOffset] = useState(0)
  const [scrollLimitReached, setScrollLimitReached] = useState(false)
  const [triggerListen, setTriggerListen] = useState(true)
  const ref = useRef()
  useEffect(() => {
    const logo = ref.current
    if (!logo) return
    const height = logo.offsetHeight
    const onScroll = () => {
      const newShowFixed = window.scrollY > height + offset
      if (scrollLimitReached !== newShowFixed) {
        document.removeEventListener('scroll', onScroll)
        setScrollLimitReached(newShowFixed)
      }
    }
    const reEnableScrollEvent = () => {
      document.addEventListener('scroll', onScroll)
      setTriggerListen(!triggerListen)
    }
    logo.addEventListener('transitionend', reEnableScrollEvent)
    onScroll()
    document.addEventListener('scroll', onScroll)
    return () => {
      logo.removeEventListener('transitionend', reEnableScrollEvent)
      document.removeEventListener('scroll', onScroll)
    }
  }, [ref, triggerListen])
  return { ref, scrollLimitReached, setScrollOffset: setOffset }
}
