import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const closeMobileMenu = () => {
    setClick(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    }

    window.addEventListener('resize', handleResize);

    setIsMobile(window.innerWidth <= 768);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Bolo Scooters
        </Link>
        {isMobile && !click ? (
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} style={{ color: 'white' }}/>
          </div>
        ) : null}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/information" className="nav-links" onClick={closeMobileMenu}>
              Informacion
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
        </ul>
        {isMobile && click ? (
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={faTimes} style={{ color: 'white' }}/>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar;