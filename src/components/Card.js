import React from 'react'
import AOS from 'aos'
AOS.init()
const Card = ({ id, nombre, descripcion, url }) => {
  return (
    <div
      className='col-s-12 col-md-4 mb-2'
      data-aos='flip-left'
      data-aos-duration='1000'>
      <div className='card h-100'>
        <img
          src={`./assets/img/${id}.png`}
          className='card-img-top'
          alt='foto pagina Amigurumis Carol'
          loading='lazy'
        />
        <div className='card-body'>
          <h5 className='card-title text-center'>{nombre}</h5>
          <p className='card-text'>{descripcion}</p>
          <div className='d-flex justify-content-center card-footer'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline-dark btn-block'>
              LINK
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
