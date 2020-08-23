import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <img src="/images/logo.png" alt="virus-logo" />
          <h3>covid-19</h3>
        </div>
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
