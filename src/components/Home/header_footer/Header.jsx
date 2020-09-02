import React, { useState } from 'react';

import Brand from '../../utils/Brand.jsx';
import Hamburger from '../../utils/Hamburger';

const Header = () => {
  const [status, setStatus] = useState(false);

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

  const checked = (value) => setStatus(value);

  return (
    <header style={{ height: status ? '500px' : '150px' }}>
      <div
        className="nav_list"
        style={{ background: status ? 'aliceblue' : 'transparent' }}
      >
        <Hamburger links={() => renderLinks()} checked={checked} />
      </div>
      <div className="nav">
        <Brand />
        <nav>{renderLinks()}</nav>
      </div>
    </header>
  );
};

export default Header;
