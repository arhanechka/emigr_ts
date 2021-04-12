import { useContext } from "react";
import { defaultConditions } from "../App";

const DataCenter = () => {
  const DataContext = useContext(defaultConditions);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>Your parameters are:</h2>
      </div>
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
