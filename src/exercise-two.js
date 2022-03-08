const database = [
  {
    country:"US",
    languages: ["en"]
  },
  {
    country:"BE",
    languages: ["nl","fr","de"]
  },
  {
    country:"NL",
    languages: ["nl","fy"]
  },
  {
    country:"DE",
    languages: ["de"]
  },
  {
    country:"ES",
    languages: ["es"]
  }
]

function countCountryWorld(database) {
  return database.length
}

function findCountryByLanguages(database, language) {
  let countries = []

  database.forEach(country => {
    let contains = (country.languages.indexOf(language) > -1);
    if (contains) countries.push(country);
  });

  return countries;
}

function countOfficialLanguages(database) {
  database.forEach(country => {
    country.countOfficialLanguages = country.languages.length;
  });

  return database;
}

function countryWithHighestLanguages(database) {
  let countryWithHighestLanguages = undefined;

  database.forEach(country => {
    let numberOfLanguages = country.languages.length;
    country.numberOfLanguages = numberOfLanguages
    
    if (!countryWithHighestLanguages) {
      countryWithHighestLanguages = country;
    }

    if (numberOfLanguages > countryWithHighestLanguages.numberOfLanguages) {
      countryWithHighestLanguages = country;
    }
  });

  return countryWithHighestLanguages;
}

function mostCommonOfficialLanguage(database) {
  let languages = [];
  
  database.forEach(country => {
    country.languages.forEach(language => languages.push(language));
  });

  return Object.entries(
    languages.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];
}

module.exports = {
  countCountryWorld,
  findCountryByLanguages,
  countOfficialLanguages,
  countryWithHighestLanguages,
  mostCommonOfficialLanguage,
}