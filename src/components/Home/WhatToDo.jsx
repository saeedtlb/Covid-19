import React from 'react';

import Title from '../utils/Title';

import Scroll from 'react-scroll';

const WhatToDo = () => {
  const Element = Scroll.Element;
  const orders = [
    {
      pic: '/images/Mask.png',
      title: 'wear masks',
      description:
        'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively ',
    },
    {
      pic: '/images/wash.png',
      title: 'wash your hands',
      description:
        'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals ',
    },
    {
      pic: '/images/rag.png',
      title: 'use nose - rag',
      description:
        'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively ',
    },
    {
      pic: '/images/contact.png',
      title: 'avoid contacts',
      description:
        'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic',
    },
  ];

  const numbersInTwoDigits = (num) => (parseInt(num) < 10 ? `0${num}` : num);

  const renderOrders = () =>
    orders.map((order, i) => (
      <div className="content" key={i}>
        <div className="wrapper">
          <div>
            <h1>
              <span>{numbersInTwoDigits(i + 1)}</span>
              {order.title}
            </h1>
            <p>{order.description}</p>
          </div>
        </div>
        <div className="pic" style={{ background: `url(${order.pic})` }}></div>
      </div>
    ));

  return (
    <Element className="toDo" name="prevention">
      <Title
        header="what should wee do"
        description="Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused"
      />
      <div className="orders">{renderOrders()}</div>
    </Element>
  );
};

export default WhatToDo;
