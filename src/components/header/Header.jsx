import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Nupur Patel</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <HeaderSocials />
        <CTA />
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
       
      </div>
    </header>
  );
};

export default Header;
