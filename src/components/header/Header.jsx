import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '/public/images/logo.svg'
import HeaderLeftLinks from './HeaderLeftLinks';
import HeaderRightLinks from './HeaderRightLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 900);

  // Get a variable that is true or false depending on if the screen is bigger than 900px or not
  // The boolean if true, will render .links__container
  // Can use same boolean to derender hamburger
  useEffect(() => {
    const handleWindowResize = () => {
      setIsScreenLarge(window.innerWidth >= 900);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);


  const hamburgerOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return(
    <header className='header'>
      <div className="row container">
        <img className='comapny__logo' src={logo}alt="shortly" />
        {(isScreenLarge || isMenuOpen) &&
          <div className='links__container container'>
            <HeaderLeftLinks />
            <hr></hr>
            <HeaderRightLinks />
          </div>}
        {!isScreenLarge && 
        <FontAwesomeIcon 
          icon={faBars} 
          size="2x" 
          onClick={hamburgerOnClick} 
          className="hamburger"/>}
      </div>
    </header>
  );
}

export default Header;
