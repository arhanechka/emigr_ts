import { useEffect, useState, useContext } from "react";
import ".././styles/index.scss";
import { Link } from "react-router-dom";
import MySlider from "./Slider";
import CountriesStore from "../../store/countriesStore";
import { IParameters } from "../../store/storeInterfaces";

const UserWightsBoard = () => {
  const [parameter, setParameter] = useState<IParameters[]>([]);
  const CStore = useContext(CountriesStore);
  const {getAllParameters, removeWeight, changeWeight, calculateDesigion, weights} = CStore
  const setChange = (name: string, value: number | number[]): void => {
    const filteredParams = weights.filter((item) => item.name !== name);
    const newItem = { name, value };
      let foundOb = parameter.find((e) => e.name === newItem.name);
    if (value === -1) {
      if (foundOb)
      removeWeight(foundOb.id)
    } else {
      if (value && foundOb && typeof value === 'number')
      changeWeight(foundOb.id, value)
    }
  };

  useEffect(()=>{
    const getParameters = async () => {
      setParameter(await getAllParameters());
    }
    getParameters()
  },[])

  const sliders = () => {
    return parameter.map((el, index) => (
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
      <Link to="/result">
        <div className="block">
          <button
            className="waves-effect green darken-3 btn"
            // onClick={calculateDesigion}
          >
            Continue
          </button>
        </div>
      </Link>
    </div>
  );
};

export default UserWightsBoard;
