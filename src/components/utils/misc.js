require('dotenv').config();

const filterCountries = (countries) => {
  const newArr = [];
  for (let i = 0; i < 51; i++) {
    const newCountry = {
      country_name: countries[i].country_name,
      cases: countries[i].cases,
    };
    newArr.push(newCountry);
  }
  return newArr;
};

export const reports = async () => {
  fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', {
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_Host,
      'X-RapidAPI-Key': process.env.REACT_APP_Api_Key,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const msg = filterCountries(data.countries_stat);
      console.log(msg);
      return 'hello';
    })
    .catch((e) => console.log('error occured' + e));
};
