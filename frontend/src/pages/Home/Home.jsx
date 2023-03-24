import Banners from '../../components/Banners/banners'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'
import NavBar from '../../components/navBar/NavBar'
import ProductList from './components/ProductsList'
import './Home.css'

function Home () {
  return (
    <main className='mainContainer'>
      <NavBar />
      <div className='content'>
        <Banners />
        <CategoryMenu />
        <ProductList />
      </div>
    </main>
  )
}

export default Home
