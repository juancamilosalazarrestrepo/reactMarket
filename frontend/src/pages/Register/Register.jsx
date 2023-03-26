import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import createUser from '../../services/usersService'
import swal from 'sweetalert'
import './Register.css'

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)

  const handleRegister = async (event) => {
    event.preventDefault()
    const response = await createUser({
      name,
      password,
      email,
      phone
    })

    if (response.status === 'OK') {
      swal(
        'Cuenta creada con exito',
        'La cuenta fue creada con exito ahora puede iniciar sesion con sus credenciales',
        'success'
      )
      navigate('/login')
    }

    swal('error', response.error, 'error')
  }

  return (
    <div className='containerRegister'>
      <form onSubmit={handleRegister} className='registerForm'>
        <legend className='formTitle'>Crear Cuenta</legend>
        <input
          className='inputLogin'
          type='text'
          placeholder='nombre'
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className='inputLogin'
          type='email'
          placeholder='email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className='inputLogin'
          type='text'
          placeholder='telefono'
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          className='inputLogin'
          type='password'
          placeholder='contraseña'
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='buttonRegister'>Crear Usuario</button>
        <legend>
          si ya tienes una cuenta <Link to='/login'>Inicia Sesion</Link>{' '}
        </legend>
      </form>
    </div>
  )
}

export default Register
