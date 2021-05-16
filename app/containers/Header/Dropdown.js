/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import PropTypes from 'prop-types';

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  Dropdown.propTypes = {
    menuitems: PropTypes.any,
    title: PropTypes.any,
    setVisible: PropTypes.any,
  };

  const menuitems = props.menuitems || [];
  const title = props.title || [];

  const setVisible = props.setVisible || [];
  const closeMobileMenu = () => {
    setVisible(false);
  };

  const showDropdown = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
      setClick(false);
    }
  };

  const hideDropdown = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 960) {
      setDropdown(!dropdown);
      setClick(false);
    }
  };

  return (
    <React.Fragment>
      <li
        className="NavbarItem"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        onClick={toggleDropdown}
        aria-hidden="true"
      >
        <span
          aria-hidden="true"
          className="NavbarLinks"
          onClick={() => {
            if (window.innerWidth > 960 && title === 'Home') {
              window.location.href = '/';
            }
          }}
        >
          {title}{' '}
          <i className={dropdown ? 'fas fa-caret-up' : 'fas fa-caret-down'} />
        </span>

        {dropdown && (
          <React.Fragment>
            <ul
              onClick={handleClick}
              role="presentation"
              className={click ? 'DropdownMenu clicked' : 'DropdownMenu'}
            >
              {menuitems.map(item => (
                <li key={item.title}>
                  {item.type ? (
                    <Link
                      className={item.className}
                      to={item.path}
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <LinkScroll
                      className={item.className}
                      to={item.path}
                      onSetActive={closeMobileMenu}
                      spy
                      smooth
                      hashSpy
                      offset={
                        item.path === 'AdHoc'
                          ? -80
                          : item.path === 'AboutUs'
                          ? -20
                          : 70
                      }
                      duration={500}
                      delay={100}
                      isDynamic
                      ignoreCancelEvents={false}
                    >
                      {item.title}
                    </LinkScroll>
                  )}
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </li>
    </React.Fragment>
  );
}

export default Dropdown;
