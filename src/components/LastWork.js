import React from 'react'

const LastWork = () => {
  return (
    <blockquote className='blockquote text-center bg-dark mt-3'>
      <p className='mb-0 text-white'>
        <span className='text-danger'>U</span>ltimo proyecto creado..Amazing
        Commerce
      </p>
      <footer className='blockquote-footer'>
        Creado con{' '}
        <cite title='Source Title'>React,Material Ui,CommerceJs y Stripe.</cite>
      </footer>
      <a
        className='btn btn-danger mb-2 mt-2 version'
        href='https://amazingcommerce.netlify.app/'
        target='_blank'
        rel='noopener noreferrer'>
        link al proyecto
      </a>
    </blockquote>
  )
}
export default LastWork
