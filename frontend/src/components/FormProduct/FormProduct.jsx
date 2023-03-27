import { useState, useEffect, useRef } from 'react'
import { createProduct, editProduct } from '../../services/productsService'
import { useParams, useLocation } from 'react-router-dom'
import { useProductsById } from '../../hooks/useProductByID'
import { useUser } from '../../hooks/useUser'
import { useCategories } from '../../hooks/useCategories'
import { Backdrop, CircularProgress } from '@mui/material'

import './FormProduct.css'
import swal from 'sweetalert'

function FormProduct () {
  let { idProduct } = useParams()
  let { product } = useProductsById(idProduct)
  const { user } = useUser()
  const { categoriesList } = useCategories()
  const [nameProduct, setNameProduct] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState(0)
  const [offer, setOffer] = useState('')
  const [offerPrice, setOfferPrice] = useState('')
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)
  const location = useLocation()
  const { state } = useLocation()

  useEffect(() => {
    if (product && !product.error && idProduct) {
      setNameProduct(product.name)
      setPrice(product.price)
      setBrand(product.brand)
      setCategory(product.category)
      setStock(product.stock)
      setOffer(product.offer)
      setOfferPrice(product.offerPrice)
      setDescription(product.description)
    }
  }, [product, idProduct])

  useEffect(() => {
    if (state) {
      idProduct = null
      product = { error: 'no hay producto' }
      setNameProduct('')
      setPrice('')
      setBrand('')
      setCategory('')
      setStock(0)
      setOffer('')
      setOfferPrice('')
      setDescription('')
    }
  }, [location, product])

  const handleCreateProduct = async (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('name', nameProduct)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('brand', brand)
    formData.append('category', category)
    formData.append('stock', stock)
    formData.append('offerPrice', offerPrice)
    formData.append('offer', offer)
    formData.append('image', image)

    await createProduct(formData)
    swal('Buen Trabajo', 'producto Creado con exito', 'success')
    setLoading(false)
  }

  const handleEditProduct = async (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('name', nameProduct)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('brand', brand)
    formData.append('category', category)
    formData.append('stock', stock)
    formData.append('offerPrice', offerPrice)
    formData.append('offer', offer)
    formData.append('image', image)

    await editProduct(formData, idProduct, user)
    swal('Buen Trabajo', 'producto Editado con exito', 'success')
    setLoading(false)
  }

  const renderForm = (productNull) => {
    return (
      <form
        className='productForm'
        ref={formRef}
        onSubmit={
          product && !product.error ? handleEditProduct : handleCreateProduct
        }
        enctype='multipart/form-data'
      >
        <legend className='formTitle'>
          {console.log(product)}
          {product && !product.error ? 'Editar Producto' : 'Crear Producto'}
        </legend>
        <div className='formInputsContainer'>
          <div className='formSection'>
            <div className='formGroup'>
              <label for='name'>Nombre del Producto</label>
              <input
                required
                type='text'
                name='name'
                value={nameProduct}
                placeholder='Nombre del prodcuto'
                className='inputProduct'
                onChange={(event) => setNameProduct(event.target.value)}
              />
            </div>
            <div className='formGroup'>
              <label for='price'>Precio</label>
              <input
                required
                type='number'
                name='price'
                value={price}
                placeholder='Precio'
                className='inputProduct'
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div className='formGroup'>
              <label for='brand'>Marca</label>
              <input
                required
                type='text'
                name='brand'
                value={brand}
                placeholder='Marca'
                className='inputProduct'
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>
            <div className='formGroup'>
              <label for='category'>Categoria</label>
              <select
                name='category'
                required
                onChange={(event) => setCategory(event.target.value)}
                className='inputProduct selectFormProduct'
              >
                {categoriesList
                  ? (
                    <>
                      {categoriesList.map((category) => {
                        return (
                          <option
                            key={category.id}
                            value={category.nameCategory}
                            selected={
                            product &&
                            category.nameCategory === product.category
                          }
                          >
                            {category.nameCategory}
                          </option>
                        )
                      })}
                    </>
                    )
                  : null}
              </select>
            </div>
          </div>
          <div className='separator' />
          <div className='formSection'>
            <div className='formGroup'>
              <label for='stock'>Cantidad disponible</label>
              <input
                required
                type='number'
                name='stock'
                value={stock}
                placeholder='cantidad disponible'
                className='inputProduct'
                onChange={(event) => setStock(event.target.value)}
              />
            </div>
            <div className='formGroup'>
              <label for='offer'>Producto en Oferta</label>
              <select
                name='offer'
                required
                onChange={(event) => setOffer(event.target.value)}
                className='inputProduct selectFormProduct'
              >
                <option value='1' selected={product && product.offer}>
                  Si
                </option>
                <option value='0' selected={product && !product.offer}>
                  no
                </option>
              </select>
            </div>
            <div className='formGroup'>
              <label for='offerPrice'>Precio de Oferta</label>
              <input
                required={offer}
                type='text'
                name='offerPrice'
                value={offerPrice}
                placeholder='Precio de oferta'
                className='inputProduct'
                onChange={(event) => setOfferPrice(event.target.value)}
              />
            </div>
            <div className='formGroup'>
              <label for='image'>Imagen</label>
              <input
                type='file'
                name='image'
                onChange={(event) => setImage(event.target.files[0])}
                className='inputProduct fileInput'
              />
            </div>
          </div>
          <div className='separator' />
          <div className='formSection'>
            <div className='formGroup'>
              <label for='description'>Descripción del producto</label>
              <textarea
                required
                name='description'
                id='description'
                value={description}
                cols='30'
                rows='10'
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            {console.log(product)}
            {product && !product.error && !productNull
              ? (
                <div className='formGroup'>
                  <label for='description'>Imagen del producto</label>
                  <img
                    src={`http://localhost:3500/img/products/${product.image}`}
                    alt={`imagen de ${product.name}`}
                    className='imagePreview'
                  />
                </div>
                )
              : null}
          </div>
        </div>

        <button className='buttonProduct'>
          {product && !product.error ? 'Editar Producto' : 'Crear Producto'}
        </button>
      </form>
    )
  }

  return (
    <div className='container'>
      {renderForm(!state ? null : product)}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  )
}

export default FormProduct
