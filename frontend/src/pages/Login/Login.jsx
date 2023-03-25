import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import login from '../../services/login'
import { useUser } from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import './Login.css'

function Login () {
  const navigate = useNavigate()
  const { user } = useUser()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  useEffect(() => {
    console.log(user)
    if (user) {
      navigate('/')
    }
  }, [user])

  const handleLogin = async (event) => {
    event.preventDefault()
    const user = await login({ email, password })
    if (user.error) {
      swal('Credenciales Invalidas', user.error, 'error')
      return
    }
    window.localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }

  return (
    <div className='containerLogin'>
      <form onSubmit={handleLogin} className='loginForm'>
        <legend className='formTitle'>Iniciar Sesion</legend>
        <input
          className='inputLogin'
          type='email'
          placeholder='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className='inputLogin'
          type='password'
          placeholder='contraseña'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button>Iniciar Sesion</button>
        <legend>
          si no tienes una cuenta <Link to='/register'>registrate</Link>{' '}
        </legend>
      </form>
    </div>
  )
}

export default Login
