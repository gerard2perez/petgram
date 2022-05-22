/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-21T22:28:19.797Z
Modified: 2022-05-22T01:38:18.429Z
*/
import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App/>)
