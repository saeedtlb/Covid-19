import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="../../Resources/images/logo.png" alt="virus-logo" />
        <h3>covid-19</h3>
      </div>
      <nav>
        <Link to="#overview" className="nav-link">
          overview
        </Link>
        <Link to="#contagion" className="nav-link">
          contagion
        </Link>
        <Link to="#symptoms" className="nav-link">
          symptoms
        </Link>
        <Link to="#prevention" className="nav-link">
          prevention
        </Link>
        <Link to="#contact" className="contact">
          contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
