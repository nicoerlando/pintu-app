import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { StyledNavbar } from './Styles';

export default function Header() {
  return (
    <StyledNavbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="brand" href="/">
        Navbar
      </Navbar.Brand>
      <Nav className="nav mr-auto">
        <Nav.Link href="/card">Card</Nav.Link>
        <Nav.Link href="/carousel">Carousel</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </StyledNavbar>
  );
}
