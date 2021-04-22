import { countries, TCountry } from "../../data/db";

interface IObjectKeys {
  [key: string]: Array<number>;
}

export interface Icharacteristics extends IObjectKeys {
  continent: Array<number>;
  climate: Array<number>;
  price: Array<number>;
  salary: Array<number>;
  passport: Array<number>;
  tax: Array<number>;
  crime: Array<number>;
  corruption: Array<number>;
  safety: Array<number>;
  civilization: Array<number>;
  studying: Array<number>;
}

export const getInitalObject = (): Icharacteristics => {
  return {
  continent: [],
  climate: [],
  price: [],
  salary: [],
  passport: [],
  tax: [],
  crime: [],
  corruption: [],
  safety: [],
  civilization: [],
  studying: [],
  }
};

export const data = (): Icharacteristics => {
  console.log("DATA ")
  const characteristics = getInitalObject();
  countries.map((country) => {
    for (let key in country) {
      if (characteristics[key as keyof IObjectKeys]) {
        let temp = country[key as keyof TCountry];
        if (typeof temp !== "string") {
          characteristics[key as keyof IObjectKeys].push(temp);
        }
      }
    }
  });
  console.log(characteristics)
  return characteristics;
};
