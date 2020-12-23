import React from 'react'
import {
  proyectosBasicos,
  proyectosReact,
  proyectosAngular,
  proyectosNode
} from '../data/proyectos'
import { CargarProyectos } from '../helper/cargarProyectos'
import { Helmet } from 'react-helmet'
import { proyectosDesktop } from './../data/proyectos'
const Proyectos = () => {
  return (
    <div className='container bg-dark mt-3'>
      <Helmet>
        <title>Mis Proyectos</title>
        <meta
          name='description'
          content='Aqui encontraras todos mis proyectos realizados'
        />
      </Helmet>
      <h1 className='text-center text-danger mb-2'>Mis Proyectos</h1>
      <div className='row'>
        <div className='col-12 text-center text-warning bg-light mb-2 p-1 p-md-2'>
          <h2>Proyectos basicos HTML-CSS-JS</h2>
        </div>
        <CargarProyectos proyectos={proyectosBasicos} />
        <div className='col-12 text-center text-primary bg-light mb-2 p-1 p-md-2'>
          <h2>Proyectos de Frontend con React</h2>
        </div>
        <CargarProyectos proyectos={proyectosReact} />
        <div className='col-12 text-center text-danger bg-light mb-2 p-1 p-md-2'>
          <h2>Proyectos de Frontend con Angular</h2>
        </div>
        <CargarProyectos proyectos={proyectosAngular} />
        <div className='col-12 text-center text-success bg-light mb-2 p-1 p-md-2'>
          <h2>Proyectos de Backend con NodeJs.</h2>
        </div>
        <CargarProyectos proyectos={proyectosNode} />
        <div className='col-12 text-center text-primary bg-light mb-2 p-1 p-md-2'>
          <h2>Proyectos de escritorio</h2>
        </div>
        <CargarProyectos proyectos={proyectosDesktop} />
      </div>
    </div>
  )
}
export default Proyectos
