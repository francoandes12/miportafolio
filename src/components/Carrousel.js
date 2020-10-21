import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <a
          href='https://francoandes12.github.io/giftApp/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='d-block w-100'
            src='../assets/img/18.png'
            alt='gif expert app captura'
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href='https://cotizador-seguros-autos.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='d-block w-100'
            src='../assets/img/15.png'
            alt='cotizador de seguros captura'
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href='https://appdeheroes.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='d-block w-100'
            src='../assets/img/20.png'
            alt='andes agencia captura'
          />
        </a>
      </Carousel.Item>
    </Carousel>
  )
}
export default Carrousel
