import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'

function ProductList () {
  const { productsList } = useProducts()

  return (
    <div>
      {console.log(productsList)}
      <div className='productsContainer'>
        {productsList
          ? productsList.map((product) => {
            return <ProductCard product={product} key={product.id} />
          })
          : null}
      </div>
    </div>
  )
}

export default ProductList
