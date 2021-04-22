enum Climate {
    Coldest=1, Cold=2, Medium=3, Warm=4, Warmest=5, Hot=6, Hotest=7
}

enum continents {
    Europe, Asia, Australia, Africa, NorthAmerica, SouthAmerica
}

//should be counted as procent from avarage salary
enum taxes {
    Lowest=1, Low=1, Medium=3, High=4, Highest=5
}

interface IObjectKeys {
    [key: string]: string | number;
  }

  export interface TCountry {
    name: string,
    continent: continents,
    climate: Climate,
    price: number,
    salary: number,
    passport: number,
    tax: number,
    crime: number,
    corruption: number,
    safety: number   
}

export const countries: TCountry[] = [
{
    name: 'Norway',
    continent: continents.Europe,
    climate: Climate.Coldest,
    price: 4000,
    salary: 4500,
    passport: 3,
    tax: taxes.High,
    crime: 3,
    corruption: 2,
    safety: 2 
},
{
    name: 'Kosta Rika',
    continent: continents.SouthAmerica,
    climate: Climate.Warmest,
    price: 2000,
    salary: 1000,
    passport: 6,
    tax: taxes.Low,
    crime: 3,
    corruption: 2,
    safety: 2 
},
{
    name: 'Panama',
    continent: continents.SouthAmerica,
    climate: Climate.Warmest,
    price: 2100,
    salary: 700,
    passport: 16,
    tax: taxes.Low,
    crime: 5,
    corruption: 3,
    safety: 4 
},
{
    name: 'Dominicana',
    continent: continents.SouthAmerica,
    climate: Climate.Warmest,
    price: 700,
    salary: 200,
    passport: 26,
    tax: taxes.Low,
    crime: 9,
    corruption: 6,
    safety: 7 
},
{
    name: 'Sweden',
    continent: continents.Europe,
    climate: Climate.Cold,
    price: 4700,
    salary: 5000,
    passport: 3,
    tax: taxes.High,
    crime: 3,
    corruption: 3,
    safety: 2 
},
{
    name: 'France',
    continent: continents.Europe,
    climate: Climate.Medium,
    price: 3000,
    salary: 2500,
    passport: 4,
    tax: taxes.High,
    crime: 4,
    corruption: 4,
    safety: 3 
},
{
    name: 'Portugal',
    continent: continents.Europe,
    climate: Climate.Warm,
    price: 2000,
    salary: 1500,
    passport: 5,
    tax: taxes.Medium,
    crime: 4,
    corruption: 4,
    safety: 3 
},
{
    name: 'Sri Lanka',
    continent: continents.Asia,
    climate: Climate.Warmest,
    price: 1700,
    salary: 500,
    passport: 15,
    tax: taxes.Medium,
    crime: 4,
    corruption: 4,
    safety: 3 
},
{
    name: 'China',
    continent: continents.Asia,
    climate: Climate.Warm,
    price: 2700,
    salary: 2500,
    passport: 15,
    tax: taxes.Medium,
    crime: 4,
    corruption: 4,
    safety: 3 
},
{
    name: 'Japan',
    continent: continents.Asia,
    climate: Climate.Medium,
    price: 5700,
    salary: 5500,
    passport: 4,
    tax: taxes.Medium,
    crime: 3,
    corruption: 2,
    safety: 2 
},
{
    name: 'Ukraine',
    continent: continents.Europe,
    climate: Climate.Medium,
    price: 700,
    salary: 500,
    passport: 14,
    tax: taxes.Lowest,
    crime: 6,
    corruption: 7,
    safety: 5 
}
]

