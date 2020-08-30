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

export const validate = (value) => {
  let valid = true;
  let error = 'Thanks for your registery';
  const style = { color: '#53a653' };
  const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  if (value.trim() === '') {
    style.color = 'red';
    valid = false;
    error = 'Email can not be blank. Please fill it in.';
  } else {
    if (!email.test(value)) {
      style.color = 'red';
      valid = false;
      error = 'Entered email is invalid';
    }
  }

  return [valid, error, style];
};
