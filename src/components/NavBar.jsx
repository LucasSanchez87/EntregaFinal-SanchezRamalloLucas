import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Crazy Foots</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Medias y Soquetes</Nav.Link>
            <Nav.Link href="#pricing">Remeras</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
  )
}

export default NavBar