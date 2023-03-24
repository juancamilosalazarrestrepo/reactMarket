import Banners from '../../components/Banners/banners'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'
import NavBar from '../../components/navBar/NavBar'
import './Home.css'

function Home() {
  return (
    <main className='mainContainer'>
      <NavBar />
      <div className='content'>
        <Banners />
        <CategoryMenu />
      </div>
    </main>
  )
}

export default Home
