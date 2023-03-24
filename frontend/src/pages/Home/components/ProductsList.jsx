import { Link } from 'react-router-dom'
import { useProducts } from '../../../hooks/useProducts'

function ProductList() {
  const { productsList } = useProducts()
  return (
    <div>
      {console.log(productsList)}
      {productsList
        ? productsList.map((product) => {
            return <p key={product.id}>{product.name}</p>
          })
        : null}
    </div>
  )
}

export default ProductList
