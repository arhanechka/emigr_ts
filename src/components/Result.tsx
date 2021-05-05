import React, {useContext} from 'react'
import CountriesStore from "../store/countriesStore";

const Result = () => {
  const CStore = useContext(CountriesStore);
  const { finalResult } = CStore;

  const getResults = () => {
   return finalResult.map((el, index) => (
          <tr>
            <td>{el.name}</td>
            <td>{el.raiting}</td>
          </tr>
          
    ));
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