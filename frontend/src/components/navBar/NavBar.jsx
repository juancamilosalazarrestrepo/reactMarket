import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import './NavBar.css'
import logo from '../../assets/brand/logoarcadiat.png'

function NavBar() {
  const { user } = useUser()
  return (
    <div className='navBar'>
      <ul className='navBarList'>
        <li>
          <Link to='/' className='navLink'>
            <img src={logo} width={220} className='logo' />
          </Link>
        </li>
        <li>
          <Link to='/' className='navLink'>
            Portatiles
          </Link>
        </li>
        <li>
          <Link to='/' className='navLink'>
            Computadores
          </Link>
        </li>
        <li>
          <Link to='/' className='navLink'>
            Componentes
          </Link>
        </li>
        <li>
          <Link to='/' className='navLink'>
            Accesorios
          </Link>
        </li>
      </ul>

      <ul className='navBarList'>
        {user ? (
          <li className='navLink'> {user.name}</li>
        ) : (
          <>
            {' '}
            <li>
              <Link to='/login' className='navLink'>
                Iniciar Sesion
              </Link>
            </li>
            <li>
              <Link to='/register' className='navLink'>
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default NavBar
