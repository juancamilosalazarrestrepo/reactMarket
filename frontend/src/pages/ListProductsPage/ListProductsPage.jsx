import NavBar from '../../components/navBar/NavBar'
import { useParams } from 'react-router-dom'
import './ListProductsPage.css'
import ProductList from '../../components/ProductsList/ProductsList'
import Footer from '../../components/Footer/Footer'

function ListProductsPage () {
  const category = useParams()

  return (
    <main className='contentProducts'>
      <NavBar />
      {category.category
        ? (
          <div className='categoryTitle'>Categoria : {category.category}</div>
          )
        : (
            ''
          )}
      <div className='contentListProducts'>
        <ProductList category={category.category ? category.category : 'all'} />
      </div>
      <Footer />
    </main>
  )
}

export default ListProductsPage
