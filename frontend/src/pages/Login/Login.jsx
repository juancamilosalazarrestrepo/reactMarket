import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import login from '../../services/login'
import { useUser } from '../../hooks/useUser'

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
    window.localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleLogin} className='App'>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type='password'
          placeholder='contraseña'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default Login
