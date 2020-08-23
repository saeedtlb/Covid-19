import React from 'react';

import Layout from '../../HOC/layout.jsx';

import Home from './Home.jsx';
import About from './About';

const Landing = () => {
  return (
    <div className="landing">
      <Layout>
        <Home />
        <About />
      </Layout>
    </div>
  );
};

export default Landing;
