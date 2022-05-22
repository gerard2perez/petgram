/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-22T19:09:36.618Z
*/
import { ListOfCategories } from './components/list-of-categories'
import { Logo } from './components/logo'
import { ListOfPhotoCards } from './container/list-of-photo-cards'
import { PhotoCardWithQuery } from './container/photo-card-with-query'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return <>
    <GlobalStyle/>
    <Logo/>
    {
      detailId
        ? <PhotoCardWithQuery id={detailId}/>
        : <>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={1}/>
          </>
    }
  </>
}
