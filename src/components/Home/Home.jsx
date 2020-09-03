import React from 'react';

import Scroll from 'react-scroll';

const Home = () => {
  const Element = Scroll.Element;

  return (
    <Element className="home" name="overview">
      <div className="text">
        <div>
          <span>COVID-19 Alert</span>
          stay at home quarantine to stop corona virus
        </div>
        <p>
          there is no specific medivine to prevent or treat coronavirus disease
          (COVID-19). prople may need supportive care to .
        </p>
        <div className="button-container-1">
          <span className="mas">let us help</span>
          <button type="button">let us help</button>
        </div>
      </div>
      <div className="illustration"></div>
    </Element>
  );
};

export default Home;
