import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import './NotFound.css'

function NotFoundPage () {
  return (
    <div>
      <NavBar />
      <div className='contentNotFound'>
        <span>404</span>
        <p>Pagina No Encontrada</p>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundPage
