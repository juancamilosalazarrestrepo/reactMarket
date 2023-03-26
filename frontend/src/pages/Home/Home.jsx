import { useProducts } from '../../hooks/useProducts'
import Banners from '../../components/Banners/banners'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'
import NavBar from '../../components/navBar/NavBar'
import './Home.css'
import ProductSwipe from '../../components/ProductSwipe/ProductSwipe'
import Footer from '../../components/Footer/Footer'

function Home () {
  const { productsList } = useProducts()
  return (
    <main className='mainContainer'>
      <NavBar />
      <div className='content'>
        <Banners />
        <section>
          <CategoryMenu />
        </section>

        {productsList
          ? (
            <section className='offerSection'>
              <span className='titleOfferSection'>Productos en oferta</span>
              <ProductSwipe
                productsList={productsList.filter((product) => product.offer)}
              />
            </section>
            )
          : null}
        <Footer />
      </div>
    </main>
  )
}

export default Home
