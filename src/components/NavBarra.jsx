import React from "react";
import {NavLink} from 'react-router-dom'
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from './../images/carrito.png'
import './NavBarra.css';
const NavBarra=()=> {
    return (
      <>
        <Navbar bg="danger" expand="lg">
          <Container fluid>
            <NavLink className="navLink" to="/">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              JF5 STORE
            </NavLink>
            <NavLink to="/cart" className="navLink">
              <CartWidget />
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  to="/nombre/PS4"
                  className="navLink"
                  activeClassName="active"
                >
                  Consolas
                </NavLink>
                <NavLink
                  to="/nombre/XBOX"
                  className="navLink"
                  activeClassName="active"
                >
                  Teclados
                </NavLink>
                <NavLink
                  to="/nombre/Telefono"
                  className="navLink"
                  activeClassName="active"
                >
                  Mouses
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}
export default NavBarra
