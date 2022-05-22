/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-21T22:28:19.797Z
Modified: 2022-05-22T02:02:43.196Z
*/
import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<App/>)
