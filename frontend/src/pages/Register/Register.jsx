import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { TextField, Backdrop, CircularProgress } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import createUser from '../../services/usersService'
import swal from 'sweetalert'
import './Register.css'

function Register () {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {
    handleRegister(data)
  }

  const handleRegister = async (data) => {
    setLoading(true)
    const response = await createUser({
      name: data.name,
      password: data.password,
      email: data.email,
      phone: data.email
    })

    if (response.status === 'OK') {
      swal(
        'Cuenta creada con exito',
        'La cuenta fue creada con exito ahora puede iniciar sesion con sus credenciales',
        'success'
      )
      setLoading(false)
      navigate('/login')
    }
    setLoading(false)
    swal('error', response.error, 'error')
  }

  return (
    <div className='containerRegister'>
      <form onSubmit={handleSubmit(onSubmit)} className='registerForm'>
        <legend className='formTitle'>Crear Cuenta</legend>
        <TextField
          label='Nombre'
          className='inputForm'
          {...register('name', { required: true, maxLength: 40 })}
        />
        {errors.name?.type === 'required' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El titulo es Requerido
          </p>
        )}
        {errors.name?.type === 'maxLength' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El titulo supera los 40 caracteres
          </p>
        )}
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
          type='number'
          className='inputForm'
          label='telefono'
          {...register('phone', {
            required: true,
            maxLength: 10,
            pattern: /^[0-9]+$/
          })}
        />
        {errors.phone?.type === 'required' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El telefono es Requerido
          </p>
        )}
        {errors.phone?.type === 'maxLength' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El telefono supera los 10 caracteres
          </p>
        )}
        {errors.phone?.type === 'pattern' && (
          <p role='alert' className='errorForm'>
            <ErrorOutlineIcon fontSize='small' />
            El telefono contiene Caracteres que no son numeros
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
        <input type='submit' className='buttonRegister' value='Crear Usuario' />
        <legend>
          si ya tienes una cuenta <Link to='/login'>Inicia Sesion</Link>{' '}
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

export default Register
