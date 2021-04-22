import React , { useContext } from "react";
import {userContext} from './Landing'

interface iProps {
  display: string;
  handleChoice(choice: string): void;
}

interface Icountries {
  name: string;
  checked: false;
}

const countries: Icountries[] = [
  { name: "Europe", checked: false },
  { name: "Asia", checked: false },
  { name: "Australia", checked: false },
  { name: "Africa", checked: false },
  { name: "North America", checked: false },
  { name: "South America", checked: false },
];

const CountriesChoice = (props: iProps) => {
  const user= useContext(userContext)
  const handleClick = (parameter: string): void => {
    user.countries?.push(parameter)
    console.log(user)
    props.handleChoice(parameter)
  }

  return (
    <div className="collection" style={{ display: props.display }}>
      {countries.map((el, index) => (
        <a className="collection-item">
          <span className="badge">
            <p>
              <label>
                <input type="checkbox" 
                defaultChecked={false}
                onClick={() => handleClick(el.name)}
                />
                <span></span>
              </label>
            </p>
          </span>
          {el.name}
        </a>
        //   <li>
        //     <i className="material-icons">{el.name}</i>
        //     <p>
        //       <label>
        //         <input type="checkbox" defaultChecked={false} />{" "}
        //         <span>Choose</span>
        //       </label>
        //     </p>
        //   </li>
      ))}
    </div>
  );
};

export default CountriesChoice;
