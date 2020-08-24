import React from 'react';

import Title from '../utils/Title';

const Symptomps = () => {
  return (
    <div className="container">
      <Title
        header="symptomps"
        description="Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory"
        style={{ marginBottom: '0' }}
      />
      <div className="symptomps">
        <img
          src="/images/symptomps.png"
          alt="symptomps"
          style={{
            display: 'block',
            margin: '0 auto',
            width: '60%',
            maxWidth: '80%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default Symptomps;
