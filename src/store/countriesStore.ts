import { IContinents } from "../components/ContinentsChoice";
import { observable, action, computed, extendObservable } from "mobx";
import { createContext } from "react";

import {
  IParameters,
  IDataCollected,
  IfinalData,
  TCountry,
  Climate,
  iFinalResult,
} from "./storeInterfaces";
import { makeDesigion } from "./desigion";
import {
  getAllContinents,
  getParameters,
  getCountiriesByContinentsId,
  getCountiriesByCountiriesId,
} from "../api/api";
import { weights } from "../logic/tr_config/2";

export interface ICountriesStore {
  continents: IContinents[];
  climates?: Climate | null;
  country: TCountry[];
  filteredContinents?: string[];
  dataCollected: IDataCollected[];
  finalData: IfinalData;
}

class CountriesStore implements ICountriesStore {
  constructor() {
  }
  // @action reset() {
  //   extendObservable(this, {
  //     filteredContinentIds: [],
  //     filteredCountries: [],
  //     weights: [],
  //     dataCollected: [],
  //     finalData: { countries: [], characteristics: [] },
  //     finalResult: [],
  //   });
  // }

  @observable continents: IContinents[] = [];
  @observable filteredContinentIds: number[] = [];
  @observable filteredCountries: number[] = [];
  @observable country: TCountry[] = [];
  @observable weights: IParameters[] = [];
  @observable dataCollected: IDataCollected[] = [];
  @observable finalData: IfinalData = { countries: [], characteristics: [] };
  @observable finalResult: iFinalResult[] = [];

  @computed get info() {
    return {
      continents: this.continents,
      filteredContinents: this.filteredContinentIds,
      countries: this.country,
      parameters: this.weights,
    };
  }

  @action addContinent = (continentId: number) => {
    this.filteredContinentIds.push(continentId);
    console.log(this.filteredContinentIds);
  };

  @action addCountry = (countryId: number) => {
    this.filteredCountries.push(countryId);
    console.log(this.filteredCountries);
  };

  @action getContinents = async (): Promise<IContinents[]> => {
    this.continents = []
    this.continents = await getAllContinents();
    return this.continents;
  };

  @action getCountiriesByContinentsId = async (): Promise<TCountry[]> => {
    this.country = []
    this.country = await getCountiriesByContinentsId(this.filteredContinentIds);
    return this.country;
  };

  @action getAllParameters = async (): Promise<IParameters[]> => {
    this.weights = []
    this.weights = await getParameters();
    this.weights.map((par) => {
      par.value = 50;
    });
    return this.weights;
  };

  @action getCountiriesByCountiriesId = async (): Promise<TCountry[]> => {
    this.country = []
    this.country = await getCountiriesByCountiriesId(this.filteredCountries);
    return this.country;
  };

  @action removeWeight = (id: number) => {
    const newParameters = this.weights.filter(
      (parameter) => parameter.id != id
    );
    this.weights = newParameters;
  };

  @action changeWeight = (id: number, value: number) => {
    this.weights.map((parameter) => {
      if (parameter.id === id) {
        parameter.value = value;
      }
    });
  };

  @action recalculateWeights = () => {
    let sum = 0;
    Object.entries(this.weights).map(([key, value]) => (sum += value.value));
    let coefficient = 100 / sum;
    let newArray: number[] = [];
    Object.entries(this.weights).map(([key, value]) =>
      newArray.push((value.value * coefficient) / 100)
    );
    this.weights.forEach((el) => (el.value = (el.value * coefficient) / 100));
    let newSum = newArray.reduce((total, amount) => total + amount);
    console.log(this.weights);
    console.log(newSum);
  };

  @action collectData = () => {
    this.weights.forEach((weight) => {
      let newObj: IDataCollected = { id: weight.id, name: "", values: [] };
      this.country.forEach((countryt) => {
        let value = countryt[weight.country_alias as keyof TCountry];
        if (typeof value === "number") {
          console.log(weight.country_alias);
          newObj.name = weight.country_alias;
          newObj.values.push(value);
        }
      });
      this.dataCollected.push(newObj);
    });
    console.log(this.dataCollected);
    console.log(this.country);
    this.recalculateWeights();
  };

  @action calculateDesigion = () => {
    this.recalculateWeights();
    this.country.forEach((count) => {
      this.finalData.countries.push(count.name);
    });
    this.weights.forEach((weight) => {
      let newObj = {
        name: weight.country_alias,
        values: <number[]>[],
        weight: weight.value,
      };
      let values1: number[] = [];

      this.country.forEach((countryt) => {
        let value = countryt[weight.country_alias as keyof TCountry];
        if (typeof value === "number") {
          console.log(weight.country_alias);
          values1.push(value);
        }
      });
      newObj.values = values1;
      this.finalData.characteristics.push(newObj);
      console.log(this.finalData);
      this.finalResult = makeDesigion(this.finalData);
    });
  };
}

export default createContext(new CountriesStore());
