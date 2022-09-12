import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = () => (
  <header data-test="headerComponent">
    <div className="wrap">
      <div className="logo">
        <img data-test="logoImg" src={Logo} alt="Logo" />
      </div>
    </div>
  </header>
);

export default Header;
