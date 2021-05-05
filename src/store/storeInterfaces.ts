export interface IParameters {
    id: number;
    name: string;
    country_alias: string
    value: number;  
  }

  export interface IcontinentsKeys {
    [key: string]: number | undefined;
  }

  export enum Climate {
    Coldest=1, Cold=2, Medium=3, Warm=4, Warmest=5, Hot=6, Hotest=7
}

export enum continents {
    Europe, Asia, Australia, Africa, NorthAmerica, SouthAmerica
}

  export interface Icontinents extends IcontinentsKeys {
    Europe?: number,
    Asia?: number, 
    Australia?: number, 
    Africa?: number, 
    NorthAmerica?: number, 
    SouthAmerica?: number
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

export interface IDataCollected {
  id: number,
  name: string,
  values: number[]
}

export interface IfinalData {
  countries: string[],
  characteristics: {
    name: string,
    values: number[],
    weight: number
  }[]
}

export interface iFinalResult {
name: string,
raiting: number
}
