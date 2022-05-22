/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-22T03:05:47.483Z
*/
import { ListOfCategories } from './components/list-of-categories'
import { ListOfPhotoCards } from './components/list-of-photo-cards'
import { GlobalStyle } from './GlobalStyles'
export const App = () => (
  <>
    <GlobalStyle/>
    <ListOfCategories/>
    <ListOfPhotoCards/>
  </>
)
