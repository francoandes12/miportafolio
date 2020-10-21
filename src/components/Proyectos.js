import React, { Suspense } from 'react'
import { proyectos } from '../data/proyectos'
import Skeleton from 'react-loading-skeleton'
const Proyectos = () => {
  const Card = React.lazy(() => import('./Card'))
  return (
    <div className='container bg-dark mt-3'>
      <h1 className='text-center text-danger'>Mis Proyectos</h1>
      <div className='row'>
        {proyectos.map((proyecto) => (
          <Suspense fallback={<Skeleton count={5} />} key={proyecto.id}>
            <Card key={proyecto.id} {...proyecto} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}
export default Proyectos
