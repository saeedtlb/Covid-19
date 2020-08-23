import React from 'react';

import Brand from '../../utils/Brand.jsx';

const Header = () => {
  return (
    <header>
      <div className="nav">
        <Brand />
        <nav>
          <a href="#overview" className="nav-link">
            overview
          </a>
          <a href="#contagion" className="nav-link">
            contagion
          </a>
          <a href="#symptoms" className="nav-link">
            symptoms
          </a>
          <a href="#prevention" className="nav-link">
            prevention
          </a>
          <a href="#contact" className="contact">
            contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
