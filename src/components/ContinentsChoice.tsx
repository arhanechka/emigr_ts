import React , { useContext, useEffect, useState } from "react";
import {userContext} from './Landing'
import CountriesStore from '../store/countriesStore'
import { Link } from "react-router-dom";
import { useQuery } from 'react-query'

interface iProps {
  display: string;
  handleChoice(choice: string): void;
}

export interface IContinents {
  id: number
  name: string;
  checked?: boolean;
}

const ContinentsChoice = (props: iProps) => {
  const user= useContext(userContext)
  const CStore = useContext(CountriesStore)
  const [continents,setContinents] = useState<IContinents[]>([])
  const {getContinents, addContinent} = CStore
  const { isLoading, isError, data, error } = useQuery('continents', getContinents)
  const handleClick = (id: number, parameter: string): void => {
    user.countries?.push(parameter)
    console.log(user)
    addContinent(id)
  }
  useEffect(()=>{
    const getParameters = async () => {
      setContinents(await getContinents());
    }
    getParameters()
    console.log(continents)
  }, [])

  const getContinentsToMap = ()=>{
    if (continents!=undefined){
      return continents.map((el, index) => (
        <a 
        className="collection-item"
        onClick={()=>{
          console.log(console.log(el.name + " clicked")); el.checked=true}}>
          <span className="badge">
            <p>
              <label>
                <input type="checkbox" 
                // defaultChecked={false}
                checked={el.checked}
                onClick={() => handleClick(el.id, el.name)}
                />
                <span></span>
              </label>
            </p>
          </span>
          {el.name}
        </a>
    ))}
  }

  return (
    <div className="collection" style={{ display: props.display }}>
      {getContinentsToMap()}
      <Link to='/countries'>
        <div className="block">
          <button
            className="waves-effect green darken-3 btn"
          >
            Continue
          </button>
        </div>{" "}
      </Link>
    </div>
  );
};

export default ContinentsChoice;
