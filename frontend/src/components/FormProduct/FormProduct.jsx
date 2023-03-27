import { useState, useEffect } from 'react'
import { createProduct, editProduct } from '../../services/productsService'
import { useParams } from 'react-router-dom'
import { useProductsById } from '../../hooks/useProductByID'
import { useUser } from '../../hooks/useUser'
import './FormProduct.css'

function FormProduct() {
  const { idProduct } = useParams()
  const { product } = useProductsById(idProduct)
  const { user } = useUser()
  const [nameProduct, setNameProduct] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState(0)
  const [offer, setOffer] = useState('')
  const [offerPrice, setOfferPrice] = useState('')
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')

  useEffect(() => {
    console.log(idProduct, product)
    if (product) {
      setNameProduct(product.name)
      setPrice(product.price)
      setBrand(product.brand)
      setCategory(product.category)
      setStock(product.stock)
      setOffer(product.offer)
      setOfferPrice(product.offerPrice)
      setDescription(product.description)
    }
  }, [product])

  const handleCreateProduct = async (event) => {
    event.preventDefault()
    console.log(image)
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

    console.log('data', console.log(formData.getAll('image')))

    const productCreated = await createProduct(formData)
    console.log(productCreated)
  }

  const handleEditProduct = async (event) => {
    event.preventDefault()
    console.log(image)
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

    const productEdited = await editProduct(formData, idProduct, user)
  }

  return (
    <div className='container'>
      <form
        className='productForm'
        onSubmit={product ? handleEditProduct : handleCreateProduct}
        enctype='multipart/form-data'
      >
        <legend className='formTitle'>
          {product ? 'Editar Producto' : 'Crear Producto'}
        </legend>
        <div className='formInputsContainer'>
          <div className='formSection'>
            <div className='formGroup'>
              <label for='name'>Nombre del Producto</label>
              <input
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
              <input
                type='text'
                name='category'
                value={category}
                placeholder='Categoria'
                className='inputProduct'
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>
          </div>
          <div className='separator' />
          <div className='formSection'>
            <div className='formGroup'>
              <label for='stock'>Cantidad disponible</label>
              <input
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
              <input
                type='text'
                name='offer'
                value={offer}
                placeholder='Producto en oferta'
                className='inputProduct'
                onChange={(event) => setOffer(event.target.value)}
              />
            </div>
            <div className='formGroup'>
              <label for='offerPrice'>Precio de Oferta</label>
              <input
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
                className='inputProduct'
              />
            </div>
          </div>
          <div className='separator' />
          <div className='formSection'>
            <div className='formGroup'>
              <label for='description'>Descripción del producto</label>
              <textarea
                name='description'
                id='description'
                value={description}
                cols='30'
                rows='10'
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            {product ? (
              <div className='formGroup'>
                <label for='description'>Imagen del producto</label>
                <img
                  src={`http://localhost:3500/img/products/${product.image}`}
                  alt={`imagen de ${product.name}`}
                  className='imagePreview'
                />
              </div>
            ) : null}
          </div>
        </div>

        <button className='buttonProduct'>
          {product ? 'Editar Producto' : 'Crear Producto'}
        </button>
      </form>
    </div>
  )
}

export default FormProduct
