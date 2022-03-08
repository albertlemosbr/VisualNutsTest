const {
  countCountryWorld,
  findCountryByLanguages,
  countOfficialLanguages,
  countryWithHighestLanguages,
  mostCommonOfficialLanguage,
} = require('../src/exercise-two');

const databaseMock = [
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

describe('Exercise Two', () => {
  it('should return count country in World', () => {
    const mock = databaseMock;
    expect(countCountryWorld(mock)).toBe(5);
  });

  it('should return countries used language parameter', () => {
    const mock = databaseMock;

    expect(findCountryByLanguages(mock, 'de')).toStrictEqual([
      { country: "BE", languages: ["nl", "fr", "de"]}, {country: "DE", languages: ["de"] },
    ]);
    expect(findCountryByLanguages(mock, 'en')).toStrictEqual([
      { country: 'US', languages: [ 'en' ] },
    ]);
    expect(findCountryByLanguages(mock, 'nl')).toStrictEqual([
      { country: 'BE', languages: [ 'nl', 'fr', 'de' ] },
      { country: 'NL', languages: [ 'nl', 'fy' ] },
    ]);
  });

  it('should return countries and count official languages ', () => {
    const mock = databaseMock;
    expect(countOfficialLanguages(mock)).toStrictEqual(
      [
        { country: 'US', languages: [ 'en' ], countOfficialLanguages: 1 },
        {
          country: 'BE',
          languages: [ 'nl', 'fr', 'de' ],
          countOfficialLanguages: 3
        },
        {
          country: 'NL',
          languages: [ 'nl', 'fy' ],
          countOfficialLanguages: 2
        },
        { country: 'DE', languages: [ 'de' ], countOfficialLanguages: 1 },
        { country: 'ES', languages: [ 'es' ], countOfficialLanguages: 1 }
      ]
    );
  });

  it('should return country with highest languages', () => {
    const mock = databaseMock;
    expect(countryWithHighestLanguages(mock)).toStrictEqual({
      country: 'BE',
      languages: [ 'nl', 'fr', 'de' ],
      numberOfLanguages: 3,
    });
  });

  it('should return most common official language', () => {
    const mock = databaseMock;
    expect(mostCommonOfficialLanguage(mock)).toStrictEqual('de');
  });
  
});