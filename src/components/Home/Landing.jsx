import React from 'react';

import Header from './header_footer/Header.jsx';
import Home from './Home.jsx';
import About from './About';

const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default Landing;
