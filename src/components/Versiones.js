import React from 'react'

const Versiones = () => {
  return (
    <>
      <h3 className='text-center'>Versiones de mi portafolio</h3>
      <div className='row'>
        <div className='col-12 col-md-6 mt-2'>
          <div className='card text-center bg-dark'>
            <div className='card-body text-white'>
              <h5 className='card-title'>Version 1</h5>
              <p className='card-text'>
                Realizado con html , css puro y javascript.
              </p>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://francoandes12.github.io/me/'
                className='btn btn-danger btn-block version'>
                Link
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mt-2'>
          <div className='card text-center bg-dark'>
            <div className='card-body text-white'>
              <h5 className='card-title'>Version 2</h5>
              <p className='card-text'>
                Realizado con html y framework de css MaterializeCss.
              </p>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://francoandes12.github.io/portafolio/'
                className='btn btn-danger btn-block version'>
                Link
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mt-2'>
          <div className='card text-center bg-dark'>
            <div className='card-body text-white'>
              <h5 className='card-title'>Version 3</h5>
              <p className='card-text'>
                Realizado con framework de Css Bootstrap,sass, Node Js, Express
                y Nodemailer.Deploy en Heroku.
              </p>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://franco-ibarra-portafolio.herokuapp.com/'
                className='btn btn-danger btn-block version'>
                Link
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mt-2'>
          <div className='card text-center bg-dark'>
            <div className='card-body text-white'>
              <h5 className='card-title'>Version 4 (actual)</h5>
              <p className='card-text'>
                Realizado con Libreria de Javascript React, utilizando
                reat-router,react bootstrap,axios y aos entre otros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Versiones
