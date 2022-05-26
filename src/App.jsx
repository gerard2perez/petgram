/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-26T04:03:22.945Z
*/

import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/logo'
import { NavBar } from './components/nav-bar'
import { ApolloErrorHandler } from './container/apollo-error-handler'
import { ProtectedRoute } from './container/protected-route'
import { AppContext } from './context/app-context'
import { useInitialState } from './hooks/useInitialState'
import { Detail } from './pages/detail'
import { Favs } from './pages/fav'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { NotRegisteredUser } from './pages/not-registered-user'
import { User } from './pages/user'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => {
  const initialValue = useInitialState()
  return <AppContext.Provider value={initialValue}>
    <BrowserRouter>
      <ApolloErrorHandler/>
      <GlobalStyle/>
      <StrictMode>
        <Logo/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pets/:categoryId" element={<Home/>}/>
          <Route path="/pet/:petId" element={<Detail/>}/>
          <Route path="/login" element={<NotRegisteredUser/>}/>
          <Route path="/favs" element={<ProtectedRoute redirect="/login"><Favs/></ProtectedRoute>}/>
          <Route path="/user" element={<ProtectedRoute redirect="/login"><User/></ProtectedRoute>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <NavBar/>
      </StrictMode>
    </BrowserRouter>
  </AppContext.Provider>
}
