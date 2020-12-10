import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
export const CargarProyectos = ({ proyectos }) => {
  const Card = React.lazy(() => import('../components/Card'))
  return (
    <>
      {proyectos.map((proyecto) => (
        <Suspense fallback={<Skeleton count={5} />} key={proyecto.id}>
          <Card key={proyecto.id} {...proyecto} />
        </Suspense>
      ))}
    </>
  )
}
