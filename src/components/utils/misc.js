import { countries as codes } from './countryNames';

require('dotenv').config();

const filterCountries = (countries) => {
  const newArr = [];

  for (let i = 0; i < 51; i++) {
    const cname = countries[i].country_name.replace(' ', '');
    const cCode = codes[cname];
    const newCountry = {
      country_name: countries[i].country_name,
      cases: countries[i].cases,
      flag: cCode ? `https://www.countryflags.io/${cCode}/shiny/64.png` : '?',
    };
    newArr.push(newCountry);
  }
  return newArr;
};

export const reports = async () => {
  try {
    const res = await fetch(
      'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
      {
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_Host,
          'X-RapidAPI-Key': process.env.REACT_APP_Api_Key,
        },
      }
    );

    const data = await res.json();
    return filterCountries(data.countries_stat);
  } catch (error) {
    console.log('error occured' + error);
    return 'somthing went wrong';
  }
};

export const colorStatus = (cases) => {
  let color = '';
  if (cases.length < 8 && parseInt(cases[0]) <= 2) {
    color = '#99cc33';
  } else if (cases.length < 8 && parseInt(cases[0]) <= 7) {
    color = '#ffcc00';
  } else {
    color = '#cc3300';
  }

  return color;
};

export const findEnd = (range) =>
  range.start + 6 >= range.end ? range.end : range.start + 6;
