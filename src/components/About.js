import React from 'react'
import { skils, skilsReact } from './../data/skils'
import { Helmet } from 'react-helmet'
const About = () => {
  return (
    <div className='container bg-white mb-3 mt-3'>
      <Helmet>
        <title>Sobre Mi</title>
        <meta
          name='description'
          content='Aqui encontraras informacion personal e informacion sobre mis skills'
        />
      </Helmet>
      <h1 className='text-center'>Sobre mi</h1>
      <div className='row'>
        <div className='col-12 col-md-6 bg-dark'>
          <img
            src='../assets/img/avatar.jpg'
            alt='foto avatar Franco Ibarra'
            className='img-fluid rounded-circle mb-2'
            loading='lazy'
          />
        </div>
        <div className='col-12 col-md-6 text-center bg-light'>
          <p className='bg-dark text-white'>
            Mi nombre es Franco Ibarra, tengo 24 años y naci en Córdoba
            Capital.Actualmente estudio en 3 año en la carrera Analista
            Universitario de Sistemas Informaticos.Hace 2 años empezo mi gusto
            por la programacion web.Me especializo en el frontend utilizando
            React.
            <br />
            <span className='text-danger'>Mis Skills:</span>
          </p>
          <ul className='list-group'>
            {skils.map((skil) => (
              <li key={skil} className='list-group-item'>
                {[...skil]}
              </li>
            ))}
          </ul>
          <span className='text-info'>React Skils</span>
          <ul className='list-group'>
            {skilsReact.map((skil) => (
              <li key={skil} className='list-group-item'>
                {[...skil]}
              </li>
            ))}
          </ul>
          <span className='text-info'>Otras Lenguajes</span>
          <ul className='list-group'>
            <li className='list-group-item'>Lenguaje c#</li>
            <li className='list-group-item'>Winforms</li>
            <li className='list-group-item'>ASP.net(basico)</li>
          </ul>
          <span className='text-info'>Base De datos</span>
          <ul className='list-group'>
            <li className='list-group-item'>SQL(basico)</li>
            <li className='list-group-item'>Mongodb</li>
            <li className='list-group-item'>Firebase Cloud Firestore</li>
          </ul>
          <span className='text-info'>Metodologias</span>
          <ul className='list-group'>
            <li className='list-group-item'>Impact Mapping y User Story</li>
            <li className='list-group-item'>Scrum</li>
            <li className='list-group-item'>Kanban</li>
            <li className='list-group-item'>Clasica(Waterfall)</li>
          </ul>
          <p className='bg-dark text-white'>
            Actualmente me encuentro estudiando
            <span className='text-success'> Node Js</span> y backend para poder
            convertirme en desarrollador web Full Stack Para mas informacion
            puedes visitar mi perfil en linkedin y mi cuenta de Github. Un
            saludo!
          </p>
          <a
            href='https://github.com/francoandes12'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-dark btn-lg mb-2'>
            <i className='fab fa-github mr-2'></i>
            Github
          </a>
          <a
            href='https://www.linkedin.com/in/franco-ibarra/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-dark btn-lg mb-2 ml-3'>
            <i className='fab fa-linkedin mr-2'></i>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  )
}
export default About
