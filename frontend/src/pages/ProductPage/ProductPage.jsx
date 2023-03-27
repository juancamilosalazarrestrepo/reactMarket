import { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import { useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { useUser } from '../../hooks/useUser'
import { useProductsById } from '../../hooks/useProductByID'
import './ProductPage.css'
import Footer from '../../components/Footer/Footer'

function ProductPage() {
  const { idProduct } = useParams()
  const { product } = useProductsById(idProduct)
  const { user } = useUser()
  const navigate = useNavigate()
  const [cartData, setCartData] = useState(null)
  const [cuantityInCart, setCuantityInCart] = useState(null)

  useEffect(() => {
    if (product && product.error) {
      swal('El Producto No existe', product.error, 'info')
      navigate('/')
    }
    getCuantity()
  }, [product, user])

  const getCuantity = () => {
    let cart = window.localStorage.getItem('cart')
    if (cart && user) {
      cart = JSON.parse(cart)
      const cartOfUser = cart.cartData.filter(
        (cartUser) => cartUser.emailUser === user.email
      )
      console.log(
        cartOfUser[0].products.filter((product) => product.id === idProduct)
      )
      setCartData(cart)
      const productInCart = cartOfUser[0].products.filter(
        (product) => product.id === idProduct
      )
      if (productInCart.length > 0) {
        const cuantity = productInCart[0].cuantity
        setCuantityInCart(cuantity)
      }
    }
  }

  const addToCart = (operator) => {
    console.log(product)

    console.log(user)
    let cart = window.localStorage.getItem('cart')
    if (cart) {
      cart = JSON.parse(cart)
      const cartOfUser = cart.cartData.filter(
        (cartUser) => cartUser.emailUser === user.email
      )
      if (cartOfUser.length > 0) {
        const productCart = cartOfUser[0].products.filter(
          (productCart) => productCart.id === product.id
        )
        if (productCart.length > 0) {
          productCart[0].cuantity =
            operator === 'minus'
              ? productCart[0].cuantity - 1
              : productCart[0].cuantity + 1
          setCuantityInCart(productCart[0].cuantity)
        } else {
          cartOfUser[0].products.push({ id: product.id, cuantity: 1 })
          setCuantityInCart(1)
        }
      } else {
        cart.cartData.push({
          emailUser: user.email,
          products: [
            {
              id: product.id,
              cuantity: 1
            }
          ]
        })
      }
    } else {
      cart = {
        cartData: [
          {
            emailUser: user.email,
            products: [
              {
                id: product.id,
                cuantity: 1
              }
            ]
          }
        ]
      }
    }

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  const renderProduct = () => {
    return (
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
          {product.offer ? (
            <div className='offerPriceContainer'>
              <span className='offerPrice'>$ {product.offerPrice}</span>
              <span className='oldPrice'>$ {product.price}</span>
            </div>
          ) : (
            <span className='offerPrice'> $ {product.price}</span>
          )}
          <p className='productDescription'>{product.description}</p>

          {cuantityInCart ? (
            renderQuantityControl()
          ) : (
            <button className='buttonAddToCar' onClick={() => addToCart('new')}>
              Agregar al Carrito
            </button>
          )}
        </div>
      </div>
    )
  }

  const renderQuantityControl = () => {
    return (
      <div className='cuantity'>
        <span>
          <strong>Cantidad:</strong>{' '}
        </span>
        <div className='cuantityControl'>
          <button
            disabled={cuantityInCart === 0}
            className={
              product.cuantity === 0
                ? 'cuantityButton disabled'
                : 'cuantityButton'
            }
            onClick={() => addToCart('minus')}
          >
            -
          </button>
          <span>{cuantityInCart}</span>
          <button className='cuantityButton' onClick={() => addToCart('plus')}>
            +
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className='mainContainer'>
      <NavBar />
      <div className='contentProduct'>{product ? renderProduct() : null}</div>
      <Footer />
    </main>
  )
}

export default ProductPage
