import { observable } from "mobx"

export interface IcontinentsKeys {
    [key: string]: number | undefined;
  }

export interface Icontinents extends IcontinentsKeys {
    Europe?: number,
    Asia?: number, 
    Australia?: number, 
    Africa?: number, 
    NorthAmerica?: number, 
    SouthAmerica?: number
}

export const continentsDb:  Icontinents= {
    Europe: 1,
    Asia: 2, 
    Australia: 3, 
    Africa: 4, 
    NorthAmerica: 5, 
    SouthAmerica: 6
}

export interface IClimates {
    Coldest: number,
    Cold: number, 
    Medium: number, 
    Africa: number, 
    NorthAmerica: number, 
    SouthAmerica: number
}

export enum Climate {
    Coldest=1, Cold=2, Medium=3, Warm=4, Warmest=5, Hot=6, Hotest=7
}

export enum continents {
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
      id: number,
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
    id: 1,
    name: 'Norway',
    continent: 1,
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
    id: 1,
    name: 'Kosta Rika',
    continent: 6,
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
    id: 1,
    name: 'Panama',
    continent: 6,
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
    id: 1,
    name: 'Dominicana',
    continent: 6,
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
    id: 1,
    name: 'Sweden',
    continent: 1,
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
    id: 1,
    name: 'France',
    continent: 1,
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
    id: 1,
    name: 'Portugal',
    continent: 1,
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
    id: 1,
    name: 'Sri Lanka',
    continent: 2,
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
    id: 1,
    name: 'China',
    continent: 2,
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
    id: 1,
    name: 'Japan',
    continent: 2,
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
    id: 1,
    name: 'Ukraine',
    continent: 1,
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

