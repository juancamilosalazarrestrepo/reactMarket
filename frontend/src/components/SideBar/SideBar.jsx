import { Link } from 'react-router-dom'
import logo from '../../assets/brand/logoarcadiablanco.png'
import ComputerIcon from '@mui/icons-material/Computer'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import './SideBar.css'

function SideBar () {
  return (
    <div className='sideBar'>
      <div>
        <Link to='/'>
          <img src={logo} alt='' className='logo' />
        </Link>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <Link to='/dashboard/products' className='navigationItem'>
              <ComputerIcon />
              Productos
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard/createproduct'
              state={{ state: 'create' }}
              className='navigationItem'
            >
              <AddToQueueIcon />
              Crear Producto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
