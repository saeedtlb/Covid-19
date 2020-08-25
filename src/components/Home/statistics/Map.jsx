import React, { useState, useEffect } from 'react';

import { reports } from '../../utils/misc';

import World from './World.jsx';

const Map = () => {
  const [countries, setCountries] = useState(["Cant't respond now"]);

  useEffect(() => {
    const fetchApi = async () => {
      console.log(await reports());
    };
    // console.log(countries);
    fetchApi();
  }, []);

  const renderCountries = () => {
    if (countries.length === 1) {
      return (
        <h1 style={{ color: 'red', textAlign: 'center' }}>{countries[0]}</h1>
      );
    } else {
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
    }
  };

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
