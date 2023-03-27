import { useState, useEffect } from 'react'
import NavBar from '../../components/navBar/NavBar'
import { useUser } from '../../hooks/useUser'
import { useProducts } from '../../hooks/useProducts'

import './CartPage.css'

function CartPage () {
  const { user } = useUser()
  const { productsList } = useProducts()
  const [cart, setCart] = useState(null)
  const [productsInCart, setProductsInCart] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)
  const [cartStorage, setCartStorage] = useState(null)

  useEffect(() => {
    if (user) {
      getCartData()
    }
  }, [user])

  useEffect(() => {
    if (cart && productsList) {
      let products = cart.map((product) => {
        const productSelected = productsList.filter(
          (element) => element.id === product.id
        )[0]
        productSelected.cuantity = product.cuantity

        return productSelected
      })

      products = products.map((product) => {
        product.totalValue = product.offer
          ? product.cuantity * product.offerPrice
          : product.cuantity * product.price
        return product
      })

      setProductsInCart(products)
    }
  }, [cart, productsList])

  useEffect(() => {
    let totalValue = 0
    if (productsInCart) {
      totalValue = productsInCart.reduce(
        (sum, product) => sum + product.totalValue,
        0
      )
      setTotalPrice(totalValue)
    }
  }, [productsInCart])

  const getCartData = () => {
    let cartData = window.localStorage.getItem('cart')
    cartData = JSON.parse(cartData)
    setCartStorage(cartData)

    if (cartData) {
      const cartUser = cartData.cartData.filter(
        (data) => data.emailUser === user.email
      )
      if (cartUser.length > 0) {
        setCart(cartUser[0].products)
      }
    }
  }

  const handleQuantityProduct = (idProduct, operator) => {
    const allProducts = productsInCart
    const productToAdd = allProducts.filter(
      (product) => product.id === idProduct
    )
    productToAdd[0].cuantity =
      operator === 'plus'
        ? productToAdd[0].cuantity + 1
        : productToAdd[0].cuantity - 1
    setProductsInCart(allProducts)
    const cartOldData = cartStorage.cartData
    const cartToEdit = cartOldData.filter(
      (data) => data.emailUser === user.email
    )
    cartToEdit[0].products = productsInCart
    window.localStorage.setItem('cart', JSON.stringify(cartStorage))
    getCartData()
  }
  return (
    <main className='contentCart'>
      <NavBar />
      <div className='cartListContainer'>
        <span className='cartTitle'>Carrito de Compras</span>
        <div className='itemsContainer'>
          {productsInCart
            ? (
                productsInCart.map((product) => {
                  return (
                    <div key={product.id} className='productListItem'>
                      <img
                        src={`http://localhost:3500/img/products/${product.image}`}
                        alt={`imagen de ${product.name}`}
                        className='imgProductCart'
                      />
                      <span className='name'>{product.name}</span>
                      {product.offer
                        ? (
                          <span className='price'>
                            <strong>Precio Unitario :</strong>{' '}
                            <span className='priceOffer'>$ {product.offerPrice}</span>
                          </span>
                          )
                        : (
                          <span className='price'>
                            <strong>Precio Unitario :</strong>$ {product.price}
                          </span>
                          )}
                      <div className='cuantity'>
                        <span>
                          <strong>Cantidad :</strong>{' '}
                        </span>
                        <div className='cuantityControl'>
                          <button
                            className='cuantityButton'
                            onClick={() =>
                              handleQuantityProduct(product.id, 'plus')}
                          >
                            +
                          </button>
                          {product.cuantity}
                          <button
                            disabled={product.cuantity === 0}
                            className={
                          product.cuantity === 0
                            ? 'cuantityButton disabled'
                            : 'cuantityButton'
                        }
                            onClick={() =>
                              handleQuantityProduct(product.id, 'minus')}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <span className='totalValue'>
                        <strong>Valor Total :</strong> $ {product.totalValue}
                      </span>
                    </div>
                  )
                })
              )
            : (
              <p>No tiene productos en el carrito</p>
              )}
        </div>

        <div className='productListItem totalPriceRow'>
          <span className='totalPrice '>
            Total a pagar: <span> $ {totalPrice}</span>{' '}
          </span>{' '}
          <button className='buttonBuy'>Comprar</button>
        </div>
      </div>
    </main>
  )
}

export default CartPage
