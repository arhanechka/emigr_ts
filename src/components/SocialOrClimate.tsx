import React , { useContext, useMemo } from "react";
import {userContext} from './Landing'
import { Link } from 'react-router-dom';

interface iProps {
  display: string;
  handleChoice(choice: string): void;
}

interface Iscenarios {
  name: string;
  checked: boolean;
}

const countries: Iscenarios[] = [
  { name: "I want to move to the country by social rating and passport/civilization level", checked: false },
  { name: "I want to stay in the country with warm pleasant climate/sea/mountains, etc.", checked: false },
  { name: "I want to consider both variants", checked: false }
];

const SocialOrClimate = (props: iProps) => {
  const user= useContext(userContext)
  const isChecked = useMemo(() => (el: Iscenarios) => { el.checked=!el.checked}, [countries]);

  const handleClick = (parameter: Iscenarios): void => {
    // user.countries?.push(parameter)
    // console.log(user)
    isChecked(parameter)
    // props.handleChoice(parameter)
  }

  return (
    <div className="collection" style={{ display: props.display }}>
      <h2>Select the desirable scenario</h2>
      {countries.map((el, index) => (
        <a className="collection-item">
          <span className="badge">
            <p>
              <label>
                <input type="checkbox" 
                defaultChecked={false}
                // checked={el.checked}
                onClick={() => handleClick(el)}
                />
                <span></span>
              </label>
            </p>
          </span>
          {el.name}
        </a>
      ))}
      <Link to="/slider"><div className="block"> 
             <button className="waves-effect green darken-3 btn" >Continue</button></div>  </Link>
    </div>
  );
};

export default SocialOrClimate;
