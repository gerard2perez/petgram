/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-22T01:22:20.137Z
Modified: 2022-05-22T17:00:08.864Z
*/

import { Anchor, DecorateImage, Image } from "./styles"

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
export const Category = ({cover = DEFAULT_IMAGE, path, emoji = '?'}) => (
  <Anchor href={path}>
    <DecorateImage>
      <Image src={cover}/>
    </DecorateImage>
    {emoji}
  </Anchor>
)
