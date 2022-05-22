/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-22T18:27:01.116Z
*/
import { ListOfCategories } from './components/list-of-categories'
import { Logo } from './components/logo'
import { ListOfPhotoCards } from './container/list-of-photo-cards'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => (
  <>
    <Logo/>
    <GlobalStyle/>
    <ListOfCategories/>
    <ListOfPhotoCards categoryId={1}/>
  </>
)
