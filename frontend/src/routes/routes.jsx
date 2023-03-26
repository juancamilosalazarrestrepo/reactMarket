import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProduct from '../components/CreateProduct/CreateProduct'
import ProductsAdmin from '../components/ProductsAdmin/ProductsAdmin'
import Dashboard from '../pages/Dashboard/Dashboard'
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
      <Route
        path='/dashboard'
        element={
          <Dashboard>
            <p>hola</p>
          </Dashboard>
        }
        exact
      />
      <Route
        path='/dashboard/createproduct'
        element={
          <Dashboard>
            <CreateProduct />
          </Dashboard>
        }
        exact
      />
      <Route
        path='/dashboard/products'
        element={
          <Dashboard>
            <ProductsAdmin />
          </Dashboard>
        }
        exact
      />
    </Routes>
  </BrowserRouter>
)
