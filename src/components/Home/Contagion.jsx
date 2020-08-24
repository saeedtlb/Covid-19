import React from 'react';

import Title from '../utils/Title';

const Contagion = () => {
  const cards = [
    {
      pic: '/images/airtransmission.png',
      title: 'air transmission',
      explain:
        'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify',
    },
    {
      pic: '/images/humanContact.png',
      title: 'human contacts',
      explain: 'Washing your hands is one of thesimplest ways you can protect',
    },
    {
      pic: '/images/containtedObjects.png',
      title: 'containted objects',
      explain:
        'Use the tissue while sneezing,In this way, you can protect your droplets.',
    },
  ];

  const renderCards = () =>
    cards.map((card, i) => (
      <div className="card" key={i}>
        <div className="content">
          <div>
            <img src={card.pic} alt={card.title} />
          </div>
          <h2>{card.title}</h2>
          <p>{card.explain}</p>
        </div>
      </div>
    ));

  return (
    <div className="container">
      <Title
        header="contagion"
        description="Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type"
      />
      <div className="cards">{renderCards()}</div>
    </div>
  );
};

export default Contagion;
