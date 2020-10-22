import React, { useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
const Contacto = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    lastname: '',
    email: '',
    number: '',
    mensaje: ''
  })
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    let data = {
      name,
      email,
      number,
      mensaje,
      lastname
    }
    axios
      .post('https://francoibarra-react.herokuapp.com/api/form', data)
      .then(setSent(true))
      .catch((error) => {
        console.log(error)
      })
    setFormValues({
      name: '',
      lastname: '',
      email: '',
      number: '',
      mensaje: ''
    })
    setTimeout(() => {
      setSent(false)
    }, 3000)
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const { name, email, number, mensaje, lastname } = formValues
  return (
    <div className='container bg-white mt-3'>
      <Helmet>
        <title>Contacto</title>
        <meta
          name='description'
          content='En esta seccion,puedes ponerte en contacto conmigo completando el formulario'
        />
      </Helmet>
      <h1 className='text-center text-danger'>
        Contactame completando el formulario
      </h1>
      <blockquote className='blockquote bg-dark p-3  text-center text-white'>
        <p className=' p-4 text-left text-md-center'>FORMULARIO DE CONTACTO</p>
      </blockquote>
      <form className='bg-dark text-white' onSubmit={handleSubmit}>
        <div className='form-group mt-2'>
          <label htmlFor='name'>Nombre</label>
          <input
            onChange={handleChange}
            value={name}
            autoComplete='off'
            type='text'
            className='form-control'
            name='name'
            placeholder='ingrese su nombre'
          />
        </div>
        <div className='form-group mt-2'>
          <label htmlFor='lastname'>Apellido</label>
          <input
            value={lastname}
            onChange={handleChange}
            autoComplete='off'
            type='text'
            className='form-control'
            name='lastname'
            placeholder='ingrese su apellido'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            onChange={handleChange}
            autoComplete='off'
            type='email'
            className='form-control'
            name='email'
            placeholder='name@example.com'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='number'>Telefono</label>
          <input
            value={number}
            onChange={handleChange}
            autoComplete='off'
            type='tel'
            className='form-control'
            name='number'
            placeholder='351'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Mensaje</label>
          <textarea
            onChange={handleChange}
            value={mensaje}
            className='form-control'
            name='mensaje'
            rows='3'
            placeholder='escribe tu mensaje'></textarea>
        </div>
        <button
          onSubmit={handleSubmit}
          type='submit'
          className='btn btn-block btn-danger'>
          Enviar
        </button>
      </form>
      {sent && <p className='text-danger'>mensaje enviado</p>}
      <br />
    </div>
  )
}
export default Contacto
