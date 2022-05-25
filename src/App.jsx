/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-25T04:46:25.767Z
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/logo'
import { NavBar } from './components/nav-bar'
import { ProtectedRoute } from './container/protected-route'
import { AppContext } from './context/app-context'
import { useInitialState } from './hooks/useInitialState'
import { Detail } from './pages/detail'
import { Favs } from './pages/fav'
import { Home } from './pages/home'
import { User } from './pages/user'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  const initialValue = useInitialState()
  return <AppContext.Provider value={initialValue}>
    <BrowserRouter>
      <GlobalStyle/>
      <Logo/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pets/:categoryId" element={<Home/>}/>
        <Route path="/pet/:petId" element={<Detail/>}/>
        <Route path="/favs" element={<ProtectedRoute><Favs/></ProtectedRoute>}/>
        <Route path="/user" element={<ProtectedRoute><User/></ProtectedRoute>}/>
      </Routes>
      <NavBar/>
    </BrowserRouter>
  </AppContext.Provider>
}
