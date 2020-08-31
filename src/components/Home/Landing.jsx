import React from 'react';

import Layout from '../../HOC/layout';

import Home from './Home';
import About from './About';
import Contagion from './Contagion';
import Symptomps from './Symptomps';
import WhatToDo from './WhatToDo';
import Map from './statistics/Map';
import Contact from './Contact';

const Landing = () => {
  return (
    <div className="landing">
      <Layout>
        <Home />
        <About />
        <Contagion />
        {/* <Symptomps />
         <WhatToDo />
         <Map />
         <Contact /> */}
      </Layout>
    </div>
  );
};

export default Landing;
