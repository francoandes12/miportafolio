import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
const Home = () => {
  const Carrousel = React.lazy(() => import('./Carrousel'))
  const LastWork = React.lazy(() => import('./LastWork'))
  const Versiones = React.lazy(() => import('./Versiones'))
  return (
    <div className='container bg-white mt-3'>
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
