import React from 'react';

import World from './World.jsx';

const Map = () => {
  const countries = [
    {
      name: 'USA',
      flag: 'skyblue',
      number: '844652',
    },
    {
      name: 'italy',
      flag: 'lightgreen',
      number: '2159612',
    },
    {
      name: 'china',
      flag: 'red',
      number: '512052',
    },
  ];

  const renderCountries = () =>
    countries.map((country, i) => (
      <div className="country" key={i}>
        <div className="name">
          <span style={{ backgroundColor: `${country.flag}` }}></span>
          <span>{country.name}</span>
        </div>
        <div className="amount">
          {parseInt(country.number).toLocaleString()}
        </div>
      </div>
    ));

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fffdfd',
      }}
    >
      <div className="map">
        <World />
      </div>

      <div className="list">
        <div className="head">
          <h2>live reports</h2>
          <div className="box">
            <span>&#60;</span>
            <span>&#62;</span>
          </div>
        </div>
        <div className="countries">{renderCountries()}</div>
      </div>
    </div>
  );
};

export default Map;
