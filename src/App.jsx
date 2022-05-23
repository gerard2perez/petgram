/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-23T15:15:47.628Z
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/logo'
import { NavBar } from './components/nav-bar'
import { Detail } from './pages/detail'
import { Favs } from './pages/fav'
import { Home } from './pages/home'
import { NotRegisteredUser } from './pages/not-registered-user'
import { User } from './pages/user'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  const isAuth = false
  return <>
    <GlobalStyle/>
    <BrowserRouter>
      <Logo/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pets/:categoryId" element={<Home/>}/>
        <Route path="/pet/:petId" element={<Detail/>}/>
        <Route path="/favs" element={isAuth ? <Favs/> : <NotRegisteredUser/>}/>
        <Route path="/user" element={isAuth ? <User/> : <NotRegisteredUser/>}/>
      </Routes>
      <NavBar/>
    </BrowserRouter>
  </>
}
