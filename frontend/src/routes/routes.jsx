import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormProduct from '../components/FormProduct/FormProduct'
import ProductsAdmin from '../components/ProductsAdmin/ProductsAdmin'
import CartPage from '../pages/CartPage/CartPage'
import Dashboard from '../pages/Dashboard/Dashboard'
import Home from '../pages/Home/Home'
import ListProductsPage from '../pages/ListProductsPage/ListProductsPage'
import Login from '../pages/Login/Login'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import Register from '../pages/Register/Register'

export const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/login' element={<Login />} exact />
      <Route path='/Register' element={<Register />} exact />
      <Route path='/product/:idProduct' element={<ProductPage />} exact />
      <Route path='/products' element={<ListProductsPage />} exact />
      <Route path='/products/:category' element={<ListProductsPage />} exact />
      <Route path='/cart' element={<CartPage />} exact />
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
            <FormProduct />
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
      <Route
        path='/dashboard/editproduct/:idProduct'
        element={
          <Dashboard>
            <FormProduct />
          </Dashboard>
        }
        exact
      />
      <Route path='/*' element={<NotFoundPage />} exact />
    </Routes>
  </BrowserRouter>
)
