/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-22T03:39:51.636Z
*/
import { ListOfCategories } from './components/list-of-categories'
import { ListOfPhotoCards } from './components/list-of-photo-cards'
import { Logo } from './components/logo'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => (
  <>
    <Logo/>
    <GlobalStyle/>
    <ListOfCategories/>
    <ListOfPhotoCards/>
  </>
)
