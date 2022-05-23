/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-22T20:10:12.184Z
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/logo'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // ? <PhotoCardWithQuery id={detailId}/>
  return <>
    <GlobalStyle/>
    <BrowserRouter>
      <Logo/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pets/:id" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </>
}
