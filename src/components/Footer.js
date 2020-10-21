import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'
const Footer = () => {
  return (
    <div className='bg-dark text-white navbar d-flex flex-column flex-md-row justify-content-around mt-5 p-4'>
      <p>
        <span className='text-danger'>C</span>reado por Franco Ibarra.
      </p>
      <p>
        Made with
        <i className='fab fa-react fa-2x text-primary'></i>
      </p>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href='https://github.com/francoandes12'
        className='text-white'>
        Github <i className='fab fa-github'></i>
      </a>
      <ScrollUpButton AnimationDuration={650} />
    </div>
  )
}
export default Footer
