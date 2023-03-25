import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard ({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='productCard' key={product.id}>
        <img
          className='productImage'
          src={`http://localhost:3500/img/products/${product.image}`}
          alt={`imagen de ${product.name}`}
        />
        <span className='productName'>{product.name}</span>

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
      </div>
    </Link>
  )
}

export default ProductCard
