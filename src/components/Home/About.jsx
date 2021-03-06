import React from 'react';

import Scroll from 'react-scroll';

const About = () => {
  const Element = Scroll.Element;
  return (
    <Element className="about" name="about">
      <div className="description">
        <div className="text">
          <div>
            <span>what is COVID-19</span> coronacirus
          </div>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>
          <div className="button-container-1">
            <span className="mas">learn more</span>
            <button type="button">learn more</button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
