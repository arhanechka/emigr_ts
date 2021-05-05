import axios from 'axios'
import { IContinents } from "../components/ContinentsChoice";
import { IParameters, TCountry } from "../store/storeInterfaces";


const API_URL = 'http://localhost:3000'

export const getAllContinents = async (): Promise<IContinents[]> => {
    let resp: IContinents[] = []
    await axios
      .get<IContinents[]>(`${API_URL}/continents`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
       resp = response.data;
      });
return resp
}

export const getParameters = async (): Promise<IParameters[]> => {
    let resp: IParameters[] = []
    await axios
      .get<IParameters[]>(`${API_URL}/parameters`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        resp = response.data
        });
    return resp;
  };

  export const getCountiriesByContinentsId = async (filteredContinentIds?: number[]): Promise<TCountry[]> => {
    const params = new URLSearchParams();
    let resp: TCountry[] = []
    if (filteredContinentIds) {
      filteredContinentIds.forEach((id) =>
        params.append("continent", String(id))
      );
    }
    await axios
      .get<TCountry[]>(`${API_URL}/countries`, {
        headers: {
          "Content-Type": "application/json",
        },
        params,
      })
      .then((response) => {
        resp = response.data;
      })
      return resp;
    }

   export const getCountiriesByCountiriesId = async (filteredCountries?: number[]): Promise<TCountry[]> => {
    let resp: TCountry[] = []
    const params = new URLSearchParams();
        if (filteredCountries) {
          filteredCountries.forEach((id) => params.append("id", String(id)));
        }
        await axios
          .get<TCountry[]>(`${API_URL}/countries`, {
            headers: {
              "Content-Type": "application/json",
            },
            params,
          })
          .then((response) => {
            resp = response.data;
          });
          return resp 
        }