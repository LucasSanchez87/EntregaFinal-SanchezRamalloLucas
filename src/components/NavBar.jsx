import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Crazy Foots</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/category/soquetes">Soquetes</Link></Nav.Link>
            <Nav.Link> <Link to="/category/mediacaña">Media Caña</Link></Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
  )
}

export default NavBar