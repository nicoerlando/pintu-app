import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.scss';
import Dropdown from './Dropdown';
import logoPintu from '../../images/Events/PINTULogo.png';
// import logoPintu from '../../images/LogoPINTU.png';

// import menu items
import { MenuItems } from './MenuItems';

function Header() {
  // Cara buat responsive nya :
  // Saat viewport < 960, maka class "nav-menu" akan di hide dulu, lalu kalo user men-click div "menu-icon", class
  // "nav-menu" baru bakal dimunculin. Buat nge-track nya, kta pake State yg namanya "Visible"
  // Saat viewport > 960, class "nav-menu" akan selalu di show, dan div "menu-icon" dihilangkan jdi State "Visible" nya
  // tak bisa di update

  const [visible, setVisible] = useState(false);

  const showMobileMenu = () => setVisible(!visible);
  const closeMobileMenu = () => setVisible(false);

  const location = useLocation();

  return (
    <nav className="Navbar">
      <Link to="/" className="NavbarLogo" onClick={closeMobileMenu}>
        <img src={logoPintu} alt="logoPintu" />
      </Link>
      <div
        role="presentation"
        className="menu-icon"
        onClick={showMobileMenu}
        onKeyDown={showMobileMenu}
      >
        <i className={visible ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={visible ? 'NavbarMenu active' : 'NavbarMenu'}>
        {location.pathname === '/' ? (
          <Dropdown
            menuitems={MenuItems.home}
            title="Home"
            setVisible={setVisible}
          />
        ) : (
          <li className="NavbarItem">
            <Link to="/" className="NavbarLinks" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
        )}
        <li className="NavbarItem">
          <Link
            to="/committee"
            className="NavbarLinks"
            onClick={closeMobileMenu}
          >
            Committee
          </Link>
        </li>
        <li className="NavbarItem">
          <Link to="/events" className="NavbarLinks" onClick={closeMobileMenu}>
            Events
          </Link>
        </li>
        <Dropdown
          menuitems={MenuItems.guide}
          title="Guide"
          setVisible={setVisible}
        />
        <li className="NavbarItem">
          <Link
            to="/contact-us"
            className="NavbarLinks"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
