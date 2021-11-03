import React, {useContext, useEffect, useState} from 'react'
import CountriesStore from "../store/countriesStore";
import {iFinalResult} from '../store/storeInterfaces'

const Result = () => {
  const CStore = useContext(CountriesStore);
  const [result, setResult] = useState<iFinalResult[]>([])
  const { finalResult,calculateDesigion, cleanContinentFilter, cleanCounryFilter, cleanResult } = CStore;

  useEffect (()=>{
    const getResult = async () => {
      setResult(await  calculateDesigion());
    }
    getResult()
    return function cleanup() {
      console.log('cleanup')
      cleanContinentFilter();
      cleanCounryFilter();
      cleanResult()
     };
  },[])

  const getResults = () => {
    if (result){
   return result.map((el, index) => (
          <tr>
            <td>{el.name}</td>
            <td>{el.raiting}</td>
          </tr>
          
    ));
   }
  }

  return <div>
    <h2>Your results are:</h2>
    <table className="highlight">
        <thead>
          <tr>
              <th>Counry</th>
              <th>Raiting</th>
          </tr>
        </thead>
        <tbody>
          {getResults()}
          </tbody>
          </table>
  </div>
}

export default Result