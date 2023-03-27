import { Link } from 'react-router-dom'
import logo from '../../assets/brand/logoarcadiablanco.png'
import { useUser } from '../../hooks/useUser'
import './Footer.css'

function Footer () {
  const { user } = useUser()
  return (
    <div className='footer'>
      <div className='footerSection'>
        <img
          src={logo}
          alt='logo de arcadia technologies'
          className='logoFooter'
        />
      </div>
      <div className='footerSection'>
        <h3 className='footerLink'>Politicas</h3>
        <span className='footerLink'>Politicas</span>
        <span className='footerLink'>Nosotros</span>
        <span className='footerLink'>Reclamos</span>
      </div>

      <div className='footerSection'>
        <h3 className='footerLink'>Redes Sociales</h3>
        <span className='footerLink'>Facebook</span>
        <span className='footerLink'>Instagram</span>
        <span className='footerLink'>Twitter</span>
      </div>
      <div className='footerSection'>
        <h3 className='footerLink'>Administracion</h3>
        {user
          ? (
            <Link
              to='/dashboard/products'
              className='footerLink'
              state={{ user }}
            >
              Panel administrativo
            </Link>
            )
          : null}
      </div>
    </div>
  )
}

export default Footer
