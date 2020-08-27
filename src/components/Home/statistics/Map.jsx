import React, { useState, useEffect, useRef } from 'react';

import { reports, colorStatus, findEnd } from '../../utils/misc';
import { countries as codes } from '../../utils/countryNames';

import World from './World.jsx';

const Map = () => {
  const ref = useRef(null);
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
    const color = colorStatus(cases);
    const ccode = codes[name.replace(' ', '')];
    const border = ref.current.children[ccode];

    if (border) border.style.fill = color;

    return url !== '?' ? (
      <span className="flag" style={{ background: `url(${url})` }}></span>
    ) : (
      <span className="unknown">?</span>
    );
  };

  const renderCountries = () => {
    if (countries.length === 1)
      return (
        <h1 style={{ color: 'red', textAlign: 'center' }}>{countries[0]}</h1>
      );

    const end = findEnd(range);

    return countries.slice(range.start, end).map((country, i) => (
      <div className="country" key={i}>
        <div className="name">
          {generateFlag(country.flag, country.country_name, country.cases)}
          <span>{country.country_name}</span>
        </div>
        <div className="amount">{country.cases}</div>
      </div>
    ));
  };

  const fetchNew = (status) => {
    if (
      (status === 'prev' && range.start === 0) ||
      (status === 'next' && range.start + 6 > range.end)
    ) {
      return;
    }

    const end = findEnd(range);
    countries.slice(range.start, end).forEach((country) => {
      const ccode = codes[country.country_name.replace(' ', '')];
      const border = ref.current.children[ccode];

      if (border) border.style.fill = '#f2f2f2';
    });

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
        <World ref={ref} />
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
