import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { NavbarContent } from './Styles';

export default function Footer() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <NavbarContent href="">Footer</NavbarContent>
    </Navbar>
  );
}
