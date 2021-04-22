import { useContext } from "react";
import { defaultConditions } from "../App";
import {userContext} from './Landing'


const DataCenter = () => {
  const DataContext = useContext(defaultConditions);
  const user= useContext(userContext);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>Your parameters are:</h2>
      </div>
      <h3>{user.scenario}</h3>
      {user.countries? user.countries.map(el => (<div>{el}</div>)):<div></div>}
      <div className="block">
        <ul>
          {DataContext.map((el) => (
            <li key={el.name}>
              {el.name}: {el.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataCenter;
