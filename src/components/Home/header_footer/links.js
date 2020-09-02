import React from 'react';

import Scroll from 'react-scroll';

const scroller = Scroll.scroller;

const links = ['overview', 'contagion', 'symptomps', 'prevention', 'contact'];

const goTo = (name) => {
  scroller.scrollTo(name, {
    duration: 2000,
    delay: 100,
    smooth: true,
  });
};

export default (Name) => {
  const newLinks = Name === 'a' ? links : links.slice(0, links.length - 1);
  return newLinks.map((link) => (
    <Name
      key={link}
      href={`#${link}`}
      className={link === 'contact' ? 'contactBtn' : 'nav-link'}
      onClick={(e) => goTo(e.target.textContent)}
    >
      {link}
    </Name>
  ));
};
