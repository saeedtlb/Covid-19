import React from 'react';

import Brand from '../../utils/Brand.jsx';
import Hamburger from '../../utils/Hamburger';
import { render } from '@testing-library/react';

const Header = () => {
  const links = ['overview', 'contagion', 'symptoms', 'prevention', 'contact'];
  const renderLinks = () =>
    links.map((link) => (
      <a
        key={link}
        href={`#${link}`}
        className={link === 'contact' ? 'contactBtn' : 'nav-link'}
      >
        {link}
      </a>
    ));

  return (
    <header>
      <div className="nav_list">
        <Hamburger />
        <nav>{renderLinks()}</nav>
      </div>
      <div className="nav">
        <Brand />
        <nav>{renderLinks()}</nav>
      </div>
    </header>
  );
};

export default Header;
