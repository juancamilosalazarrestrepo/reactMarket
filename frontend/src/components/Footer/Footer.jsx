import { Link } from 'react-router-dom'
import './Footer.css'

function Footer () {
  return (
    <div className='footer'>
      <Link to='/dashboard'>Panel administrativo</Link>
    </div>
  )
}

export default Footer
