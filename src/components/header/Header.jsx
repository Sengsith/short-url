import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../../images/logo.svg'
import HeaderLeftLinks from './HeaderLeftLinks';
import HeaderRightLinks from './HeaderRightLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return(
    <header className='header'>
      <div className="row container">
        <img className='comapny__logo' src={logo}alt="shortly" />
        {isMenuOpen &&
          <div className='links__container'>
            <HeaderLeftLinks />
            <hr></hr>
            <HeaderRightLinks />
          </div>}
        <FontAwesomeIcon icon={faBars} size="2x" onClick={hamburgerOnClick}/>
      </div>
    </header>
  );
}

export default Header;
