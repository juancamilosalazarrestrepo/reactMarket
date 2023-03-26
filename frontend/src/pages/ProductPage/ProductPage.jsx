import { useEffect } from 'react'
import NavBar from '../../components/navBar/NavBar'
import { useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import './ProductPage.css'
import { useProductsById } from '../../hooks/useProductByID'

function ProductPage () {
  const { idProduct } = useParams()
  const { product } = useProductsById(idProduct)
  const navigate = useNavigate()

  useEffect(() => {
    if (product && product.error) {
      swal('El Producto No existe', product.error, 'info')
      navigate('/')
    }
  }, [product])

  return (
    <main className='mainContainer'>
      <NavBar />
      <div className='contentProduct'>
        {product
          ? (
            <div className='productContainer'>
              <div className='imagesContainer'>
                <img
                  src={`http://localhost:3500/img/products/${product.image}`}
                  alt={`imagen de ${product.name}`}
                  className='productImg'
                />
              </div>
              <div className='productInfo'>
                <span>{product.name}</span>
                {product.offer
                  ? (
                    <div className='offerPriceContainer'>
                      <span className='offerPrice'>$ {product.offerPrice}</span>
                      <span className='oldPrice'>$ {product.price}</span>
                    </div>
                    )
                  : (
                    <span className='offerPrice'> $ {product.price}</span>
                    )}
                <p className='productDescription'>{product.description}</p>
                <button className='buttonAddToCar'>Agregar al Carrito</button>
              </div>
            </div>
            )
          : null}
      </div>
    </main>
  )
}

export default ProductPage
