import { useState, useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'

function ProductList({ category }) {
  const { productsList } = useProducts()
  const [products, setProducts] = useState(null)

  useEffect(() => {
    if (productsList) {
      if (category) {
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
