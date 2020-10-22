import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const NotFound = () => {
  return (
    <div className='container bg-white mt-3 mb-5'>
      <Helmet>
        <title>Pagina No Encontrada</title>
      </Helmet>
      <h2 className='text-danger text-center'>
        Error 404! Pagina no encontrada
      </h2>
      <img
        className='img-fluid'
        src='https://www.desdelaplaza.com/wp-content/uploads/2015/12/Error-404.png'
        alt='404'
      />
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/' className='btn btn-dark mb-3'>
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
export default NotFound
