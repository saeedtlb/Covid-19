import React from 'react';

import '../../Resources/styles/hamburger.css';

const Hamburger = ({ links, checked, status }) => {
  return (
    <div className="menu">
      <label>
        <input type="checkbox" onClick={(e) => checked(e.target.checked)} />
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" />
          <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
          <path className="line--2" d="M0 50h70" />
          <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
        </svg>
      </label>
      {links ? (
        <nav
          style={{
            transform: status ? 'translateY(0)' : 'translateY(-400px)',
          }}
        >
          {links()}
        </nav>
      ) : null}
    </div>
  );
};

export default Hamburger;
