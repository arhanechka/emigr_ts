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

export const character: Icharacteristics = {
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
};

export const o = Object.freeze(character);

export const data = (): Icharacteristics => {
  console.log("DATA ")
  countries.map((country) => {
    for (let key in country) {
      if (character[key as keyof IObjectKeys]) {
        let temp = country[key as keyof TCountry];
        if (typeof temp !== "string") {
          character[key as keyof IObjectKeys].push(temp);
        }
      }
    }
  });
  console.log(character)
  return character;
};
