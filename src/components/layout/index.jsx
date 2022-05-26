/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-26T01:14:46.600Z
Modified: 2022-05-26T01:37:03.051Z
*/

import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './styles'

export const Layout = ({ append = true, children, title, subtitle }) => {
  return <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name='description' content={subtitle}/>}
    </Helmet>
    <Div>
      <header>
        {(append && title) && <Title>{title}</Title>}
        {(append && subtitle) && <Subtitle>{subtitle}</Subtitle>}
      </header>
      {children}
    </Div>
  </>
}
