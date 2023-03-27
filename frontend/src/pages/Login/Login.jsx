import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { TextField, Backdrop, CircularProgress } from '@mui/material'
import { useForm } from 'react-hook-form'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import login from '../../services/login'
import { useUser } from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import './Login.css'

function Login () {
  const navigate = useNavigate()
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const onSubmit = (data) => {
    handleLogin(data)
  }

  const handleLogin = async (data) => {
    setLoading(true)
    if (!data.email || !data.password) {
      swal(
        'Complete el formulario por favor',
        'debe rellenar todos los campos',
        'info'
      )
      setLoading(false)
      return
    }

    const user = await login(data.email, data.password)
    if (user.error) {
      swal('Credenciales Invalidas', user.error, 'error')
      setLoading(false)
      return
    }
    window.localStorage.setItem('user', JSON.stringify(user))
    setLoading(false)
    navigate('/')
  }

  return (
    <div className='containerLogin'>
      <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
        <legend className='formTitle'>Iniciar Sesion</legend>
        <TextField
          className='inputForm'
          type='email'
          label='email'
          {...register('email', {
            required: true
          })}
        />
        {errors.email?.type === 'required' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El email es Requerido
          </p>
        )}
        <TextField
          className='inputForm'
          type='password'
          label='contraseña'
          {...register('password', {
            required: true,
            maxLength: 20,
            minLength: 4
          })}
        />
        {errors.password?.type === 'required' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El password es Requerido
          </p>
        )}
        {errors.password?.type === 'maxLength' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El password supera los 20 caracteres
          </p>
        )}
        {errors.password?.type === 'minLength' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El password debe tener entre 4 y 10 caracteres
          </p>
        )}
        <input type='submit' className='buttonLogin' value='Iniciar Sesion' />

        <legend>
          si no tienes una cuenta <Link to='/register'>registrate</Link>{' '}
        </legend>
      </form>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  )
}

export default Login
