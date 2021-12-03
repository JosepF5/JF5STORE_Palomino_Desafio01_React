import React from "react";
import { Navbar,Nav,Container } from 'react-bootstrap';

const NavBarra=()=> {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">JF5 Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Nosotros</Nav.Link>
          <Nav.Link href="#">Tienda</Nav.Link>
          <Nav.Link href="#">Combos</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
export default NavBarra
