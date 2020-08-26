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

  const generateFlag = (url, name, cases) => {
    let color = '';
    if (cases.length < 8 && parseInt(cases[0]) <= 2) {
      color = '#99cc33';
    } else if (cases.length < 8 && parseInt(cases[0]) <= 7) {
      color = '#ffcc00';
    } else {
      color = '#cc3300';
    }

    const cBorder = document.querySelector(`path[data-name="${name}"]`);

    if (cBorder) {
      cBorder.style.fill = color;
    }

    if (url === '?') {
      return <span className="unknown">?</span>;
    } else {
      return (
        <span className="flag" style={{ background: `url(${url})` }}></span>
      );
    }
  };

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
            {generateFlag(country.flag, country.country_name, country.cases)}
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

    const end = range.start + 6 >= range.end ? range.end : range.start + 6;
    for (let i = range.start; i < end; i++) {
      const cBorder = document.querySelector(
        `path[data-name="${countries[i].country_name}"]`
      );

      if (cBorder) {
        cBorder.style.fill = '#f2f2f2';
      }
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
