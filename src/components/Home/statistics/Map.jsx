import React, { useState, useEffect } from 'react';

import { reports } from '../../utils/misc';

import World from './World.jsx';

const Map = () => {
  const [countries, setCountries] = useState(["Cant't respond now"]);
  const [range, setRange] = useState({
    start: 0,
    end: 0,
  });

  useEffect(() => {
    reports().then((res) => {
      setCountries(res);
    });
  }, []);

  useEffect(() => {
    setRange((prev) => ({
      ...prev,
      end: countries.length,
    }));
  }, [countries]);

  const renderCountries = () => {
    if (countries.length === 1) {
      return (
        <h1 style={{ color: 'red', textAlign: 'center' }}>{countries[0]}</h1>
      );
    } else {
      const end = range.start + 6 >= range.end ? range.end : range.start + 6;

      return countries.slice(range.start, end).map((country, i) => (
        <div className="country" key={i}>
          <div className="name">
            <span
              style={{ backgroundColor: `#${Math.floor(Math.random() * 999)}` }}
            >
              #{Math.floor(Math.random() * 999)}
            </span>
            <span>{country.country_name}</span>
          </div>
          <div className="amount">{country.cases}</div>
        </div>
      ));
    }
  };

  const fetchNew = (status) => {
    if (
      (status === 'prev' && range.start === 0) ||
      (status === 'next' && range.start + 6 > range.end)
    ) {
      return;
    }

    setRange((prev) => ({
      ...prev,
      start: status === 'next' ? prev.start + 6 : prev.start - 6,
    }));
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
            <span onClick={() => fetchNew('prev')}>&#60;</span>
            <span onClick={() => fetchNew('next')}>&#62;</span>
          </div>
        </div>
        <div className="countries">{renderCountries()}</div>
      </div>
    </div>
  );
};

export default Map;
