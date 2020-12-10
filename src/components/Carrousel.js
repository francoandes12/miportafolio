import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <a
          href='https://technostation.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='d-block w-100'
            src='../assets/img/5.png'
            alt='Techno station'
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href='https://andesnotas.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='d-block w-100'
            src='../assets/img/21.png'
            alt='journal App'
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href='https://amigurumiscarol.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='d-block w-100'
            src='../assets/img/19.png'
            alt='amigurumis carol'
          />
        </a>
      </Carousel.Item>
    </Carousel>
  )
}
export default Carrousel
