import { createContext, useEffect, useMemo, useRef, useState } from "react";
import ".././styles/index.scss";
import { Link } from "react-router-dom";
import MySlider from "./Slider";
import { data } from "../../logic/tr_config/main";
import { parameters, Iparameters } from "./ParametersData";

export const userParametersContext = createContext<Iparameters[]>(parameters);

const Slider = () => {
  const [parameter, setParameter] = useState(parameters);

  // const generalData: Icharacteristics = useMemo(() => data(), [isButtonClicked]);
  const setChange = (name: string, value: number | number[]): void => {
    if (value === -1) {
      const filteredParams = parameter.filter((item) => item.name !== name);
      setParameter(filteredParams);
    } else {
      const newItem = { name, value };
      let foundOb = parameter.find((e) => e.name === newItem.name);
      Object.assign(foundOb, newItem);
    }
  };

  const convertProcentsToMeasures = () => {

    let sum = 0;
    Object.entries(parameters).map(([key, value]) => (sum += value.value));
    let coefficient = 100 / sum;
    let newArray: number[] = [];
    Object.entries(parameters).map(([key, value]) =>
      newArray.push((value.value * coefficient) / 100)
    );
    let newSum = newArray.reduce((total, amount) => total + amount);


    data();

  };

  const sliders = () => {
    return parameters.map((el, index) => (
      <div>
        <MySlider
          key={index}
          name={el.name}
          value={el.value}
          setChange={setChange}
        />
      </div>
    ));
  };

  return (
    <div className="slider-block">
      <h2>Select the most important parameters for analysis </h2>
      {sliders()}
      <Link to="/prec">
        <div className="block">
          <button
            className="waves-effect green darken-3 btn"
            onClick={convertProcentsToMeasures}
          >
            Continue
          </button>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Slider;
