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
  if (cases.length <= 7) {
    if (cases.length < 7 || parseInt(cases[0]) <= 2) return '#99cc33';
    return '#ffcc00';
  }
  return '#cc3300';
};

export const findEnd = ({ start, end }) => (start + 6 >= end ? end : start + 6);
