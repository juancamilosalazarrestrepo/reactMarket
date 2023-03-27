import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import './NavBar.css'
import logo from '../../assets/brand/logoarcadiat.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function NavBar () {
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
          <Link
            to='/products'
            className='navLink'
          >
            Productos
          </Link>
        </li>
        {user
          ? (
            <li>
              <Link to='/dashboard/products' state={{ user }} className='navLink'>
                Panel Administrativo
              </Link>
            </li>
            )
          : null}
      </ul>

      <ul>
        {user
          ? (
            <div className='userDataContainer'>
              {' '}
              <Link to='/cart' className='navLink iconLink'>
                <ShoppingCartIcon />
              </Link>{' '}
              <li className='userName'> {user.name}</li>
            </div>
            )
          : (
            <div className='navBarList'>
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
            </div>
            )}
      </ul>
    </div>
  )
}

export default NavBar
