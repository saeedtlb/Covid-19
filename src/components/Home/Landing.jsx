import React from 'react';

import Layout from '../../HOC/layout.jsx';

import Home from './Home.jsx';
import About from './About';
import Contagion from './Contagion';

const Landing = () => {
  return (
    <div className="landing">
      <Layout>
        <Home />
        <About />
        <Contagion />
      </Layout>
    </div>
  );
};

export default Landing;
