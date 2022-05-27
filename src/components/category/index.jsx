/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-22T01:22:20.137Z
Modified: 2022-05-27T22:31:33.097Z
*/

import { DecorateImage, Image, Link } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', name }) => (
  <Link to={path}>
    <DecorateImage>
      <Image src={cover} alt={name}/>
    </DecorateImage>
    {emoji}
  </Link>
)
