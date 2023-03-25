import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import ProductPage from '../pages/ProductPage/ProductPage'
import Register from '../pages/Register/Register'

export const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/login' element={<Login />} exact />
      <Route path='/Register' element={<Register />} exact />
      <Route path='/product/:idProduct' element={<ProductPage />} exact />
    </Routes>
  </BrowserRouter>
)
