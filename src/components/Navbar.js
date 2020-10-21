import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
const NavbarMenu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      bg='dark'
      variant='dark'
      className='p-3'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Brand>Franco Ibarra</Navbar.Brand>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <LinkContainer
            activeClassName='active'
            className='nav-link'
            exact
            to='/'>
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer
            activeClassName='active'
            className='nav-link'
            exact
            to='/proyectos'>
            <Nav.Link>Proyectos</Nav.Link>
          </LinkContainer>
          <LinkContainer
            exact
            activeClassName='active'
            className='nav-link'
            to='/about'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer
            exact
            activeClassName='active'
            className='nav-link'
            to='/contacto'>
            <Nav.Link>Contacto</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavbarMenu
