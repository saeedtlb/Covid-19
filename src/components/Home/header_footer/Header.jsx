import React, { useState } from 'react';

import Brand from '../../utils/Brand';
import Hamburger from '../../utils/Hamburger';

import renderLinks from './links';

import Scroll from 'react-scroll';

const Header = () => {
  const scroller = Scroll.scroller;

  const [status, setStatus] = useState(false);

  //   const links = ['overview', 'contagion', 'symptomps', 'prevention', 'contact'];
  //   const renderLinks = () =>
  //     links.map((link) => (
  //       <a
  //         key={link}
  //         href={`#${link}`}
  //         className={link === 'contact' ? 'contactBtn' : 'nav-link'}
  //         onClick={(e) => goTo(e.target.textContent)}
  //       >
  //         {link}
  //       </a>
  //     ));

  //   const goTo = (name) => {
  //     scroller.scrollTo(name, {
  //       duration: 2000,
  //       delay: 100,
  //       smooth: true,
  //     });
  //   };

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
