import React from 'react';

import Title from '../utils/Title';

import Scroll from 'react-scroll'

const Symptomps = () => {
    const Element = Scroll.Element;
  return (
    <Element className="container" name="symptomps">
      <Title
        header="symptomps"
        description="Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory"
        style={{ marginBottom: '0' }}
      />
      <div className="symptomps">
        <img src="/images/symptomps.png" alt="symptomps" />
      </div>
    </Element>
  );
};

export default Symptomps;
