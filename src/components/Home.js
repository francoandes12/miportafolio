import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Helmet } from 'react-helmet'
const Home = () => {
  const Carrousel = React.lazy(() => import('./Carrousel'))
  const LastWork = React.lazy(() => import('./LastWork'))
  const Versiones = React.lazy(() => import('./Versiones'))
  return (
    <div className='container bg-white mt-3'>
      <Helmet>
        <title>Franco ibarra</title>
        <meta name='description' content='Pagina de Inicio de mi portafolio' />
      </Helmet>
      <h1 className='text-center'>Bienvenidos a mi portafolio</h1>
      <h2 className='text-center'>Proyectos Destacados:</h2>
      <Suspense fallback={<Skeleton count={5} />}>
        <Carrousel />
        <LastWork />
        <Versiones />
      </Suspense>
    </div>
  )
}
export default Home
