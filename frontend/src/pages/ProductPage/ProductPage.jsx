import { useEffect } from 'react'
import NavBar from '../../components/navBar/NavBar'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import '../Home/Home.css'
import { useProductsById } from '../../hooks/useProductByID'

function ProductPage() {
  const { idProduct } = useParams()
  const { product } = useProductsById(idProduct)
  const navigate= useNavigate()

  useEffect(() => {
    if (product && product.error) {
      swal('El Producto No existe', product.error, 'info')
      navigate('/')
    }
  }, [product])

  return (
    <main className='mainContainer'>
      <NavBar />
      <div className='content'>
        <p>{product ? product.name : '..cargando'}</p>
      </div>
    </main>
  )
}

export default ProductPage
