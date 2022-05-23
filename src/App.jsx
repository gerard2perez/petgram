/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-23T14:23:13.662Z
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/logo'
import { Detail } from './pages/detail'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => {
  return <>
    <GlobalStyle/>
    <BrowserRouter>
      <Logo/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pets/:categoryId" element={<Home/>}/>
        <Route path="/pet/:petId" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  </>
}
