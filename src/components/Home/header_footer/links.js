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
  return links.map(
    (link) =>
      link !== 'contact' ? (
        <Name
          key={link}
          href={`#${link}`}
          className="nav-link"
          onClick={(e) => goTo(e.target.textContent)}
        >
          {link}
        </Name>
      ) : (
        <div
          className="button-container-1"
          key={link}
          href={`#${link}`}
          onClick={(e) => goTo(e.target.textContent)}
          style={{ marginTop: '0' }}
        >
          <span className="mas" style={{ color: '#035755' }}>
            {link}
          </span>
          <button type="button">{link}</button>
        </div>
      )
    // <Name
    //   key={link}
    //   href={`#${link}`}
    //   className={link === 'contact' ? 'contactBtn' : 'nav-link'}
    //   onClick={(e) => goTo(e.target.textContent)}
    // >
    //   {link}
    // </Name>
  );
};
