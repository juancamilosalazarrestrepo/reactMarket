import { Link } from 'react-router-dom'
import logo from '../../assets/brand/logoarcadiablanco.png'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ComputerIcon from '@mui/icons-material/Computer'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import './SideBar.css'

function SideBar() {
  return (
    <div className='sideBar'>
      <div>
        <Link to='/' >
          <img src={logo} alt='' className='logo' />
        </Link>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <Link to='/dashboard/products' className='navigationItem'>
              {' '}
              <ComputerIcon />
              Productos
            </Link>
          </li>
          <li>
            <Link to='/dashboard/createproduct' className='navigationItem'>
              {' '}
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
