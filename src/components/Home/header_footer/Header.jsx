import React, { useState } from 'react';

import Brand from '../../utils/Brand';
import Hamburger from '../../utils/Hamburger';

import renderLinks from './links';

const Header = () => {
  const [status, setStatus] = useState(false);

  const checked = (value) => setStatus(value);

  return (
    <header style={{ height: status ? '500px' : '150px' }}>
      <div
        className="nav_list"
        style={{ background: status ? 'aliceblue' : 'transparent' }}
      >
        <Hamburger links={() => renderLinks('a')} checked={checked} />
      </div>
      <div className="nav">
        <Brand />
        <nav>{renderLinks('a')}</nav>
      </div>
    </header>
  );
};

export default Header;
