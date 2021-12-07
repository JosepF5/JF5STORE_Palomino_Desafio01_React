import React from "react";
import { Navbar,Nav,Container } from 'react-bootstrap';
import CartWidget from './CartWidget'
const NavBarra=()=> {
    return (
      <>
      <Navbar bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <CartWidget/>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Nosotros</Nav.Link>
          <Nav.Link href="#">Tienda</Nav.Link>
          <Nav.Link href="#">Combos</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
    
      </>
    )
}
export default NavBarra
