/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-22T02:53:20.673Z
Modified: 2022-05-22T17:17:48.288Z
*/

import React, { useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { Article, Button, Img, ImgWrapper } from './styles'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const observer = new window.IntersectionObserver(function(entries) {
      const { isIntersecting } = entries[0]
      if(isIntersecting) {
        console.log(isIntersecting)
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])
  return (
    <Article ref={element}>
      {show && <>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src}/>
          </ImgWrapper>
        </a>
        <Button>
          <MdFavoriteBorder size='32px'/> {likes} likes!
        </Button>
      </>}

    </Article>
  )
}
