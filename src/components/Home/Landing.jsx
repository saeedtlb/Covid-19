import React from 'react';

import Layout from '../../HOC/layout';

import Home from './Home';
import About from './About';
import Contagion from './Contagion';
import Symptomps from './Symptomps';

const Landing = () => {
  return (
    <div className="landing">
      <Layout>
        <Home />
        <About />
        <Contagion />
        <Symptomps />
      </Layout>
    </div>
  );
};

export default Landing;
