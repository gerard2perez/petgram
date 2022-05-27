/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: App.jsx
Created:  2022-05-22T01:17:40.610Z
Modified: 2022-05-27T19:31:36.903Z
*/

import { lazy, StrictMode, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/logo'
import { NavBar } from './components/nav-bar'
import { ProtectedRoute } from './container/protected-route'
import { AppContext } from './context/app-context'
import { useInitialState } from './hooks/useInitialState'
import { Detail } from './pages/detail'
import { Home } from './pages/home'
import { NotRegisteredUser } from './pages/not-registered-user'
import { GlobalStyle } from './styles/GlobalStyles'

const Favs = lazy(() => import('./pages/fav'))
const User = lazy(() => import('./pages/user'))
const NotFound = lazy(() => import('./pages/not-found'))
export const App = () => {
  const initialValue = useInitialState()
  return <AppContext.Provider value={initialValue}>
    <BrowserRouter>
      {/* <ApolloErrorHandler/> */}
      <GlobalStyle/>
      <StrictMode>
        <Logo/>
        <Suspense fallback={<div/>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pets/:categoryId" element={<Home/>}/>
            <Route path="/pet/:petId" element={<Detail/>}/>
            <Route path="/login" element={<NotRegisteredUser/>}/>
            <Route path="/favs" element={<ProtectedRoute redirect="/login"><Favs/></ProtectedRoute>}/>
            <Route path="/user" element={<ProtectedRoute redirect="/login"><User/></ProtectedRoute>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Suspense>
        <NavBar/>
      </StrictMode>
    </BrowserRouter>
  </AppContext.Provider>
}
