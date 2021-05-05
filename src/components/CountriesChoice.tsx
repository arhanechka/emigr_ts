import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./Landing";
import CountriesStore from "../store/countriesStore";
import { Link } from "react-router-dom";
import {TCountry} from '../store/storeInterfaces'
import { useQuery } from 'react-query'

interface iProps {
  display: string;
  handleChoice(choice: string): void;
}

export interface IContinents {
  id: number;
  name: string;
  checked?: boolean;
}

const CountriesChoice = (props: iProps) => {
  const user = useContext(userContext);
  const CStore = useContext(CountriesStore);
  const { getCountiriesByContinentsId, getCountiriesByCountiriesId, addCountry } = CStore;
  const { isLoading, isError, data, error } = useQuery('country', getCountiriesByContinentsId)

  const [countries, setCountries] = useState<TCountry[]>([])
  const handleClick = (id: number, parameter: string): void => {
    user.countries?.push(parameter);
    console.log(user);
    addCountry(id);
  };
  useEffect(() => {
    const getCountries = async () => {
      setCountries(await getCountiriesByContinentsId());
    }
    getCountries()
  })

  const getCountriesToMap = () => {
    if (countries != undefined) {
      return countries.map((el, index) => (
        <a className="collection-item">
          <span className="badge">
            <p>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onClick={() => handleClick(el.id, el.name)}
                />
                <span></span>
              </label>
            </p>
          </span>
          {el.name}
        </a>
      ));
    }
  };

  return (
    <div>
      <h2 className="header">
        Do you want to specify a countries you want to move?
      </h2>

      <div className="collection" style={{ display: props.display }}>
        {getCountriesToMap()}
        <Link to="/slider">
          <div className="block">
            <button
              className="waves-effect green darken-3 btn"
              onClick={() => {
                getCountiriesByCountiriesId();
              }}
            >
              Continue
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CountriesChoice;