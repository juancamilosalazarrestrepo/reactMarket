import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

export const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/login' element={<Login />} exact />
    </Routes>
  </BrowserRouter>
)
