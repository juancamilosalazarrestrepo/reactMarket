import { useState, useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ProductCard/ProductCard'
import { useLocation } from 'react-router-dom'

import './ProductsList.css'

function ProductList ({ category }) {
  const { productsList } = useProducts()
  const [products, setProducts] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (productsList) {
      if (category) {
        if (category === 'all') {
          setProducts(productsList)
          return
        }
        setProducts(
          productsList.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase()
          )
        )
        return
      }
      setProducts(productsList)
    }
  }, [productsList])

  useEffect(() => {
    setProducts(productsList)
  }, [location])

  return (
    <div className='productsContainer'>
      {products
        ? products.map((product) => {
          return <ProductCard product={product} key={product.id} />
        })
        : null}
    </div>
  )
}

export default ProductList
