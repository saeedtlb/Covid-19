require('dotenv').config();

const filterCountries = (countries) => {
  const newArr = [];
  console.log(countries);
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
