import { useEffect, useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import Board from "./Board";
import RegionChoiceCard from "./RegionChoiceCard";
import { IUserContext } from "../data/UserContext";
import CountriesStore from "../store/countriesStore";

export const userContext = createContext<IUserContext>({
  scenario: "",
  regionMatched: false,
  countries: [],
});

const Landing = () => {
  const [goButton, setGoButton] = useState(true);
  const [regionChoice, setRegionChoice] = useState(true);
  const CStore = useContext(CountriesStore);
  const [link, setLink] = useState("");
  const { getCountiriesByContinentsId } = CStore;

  const handleUserProfile = (choice: string): void => {
    if (choice.includes("game")) setRegionChoice(!regionChoice);
    else alert("This part is still developing. You can try destination game instead!");
  };

  const handleChoice = (choice: string): void => {
    console.log(choice);
    if (choice === "yes") {
      setLink("/cont");
    } else setLink("/slider");
    setGoButton(false)
  };

  const handleButton = () => {
    getCountiriesByContinentsId();
  };

  return (
    <div>
      <Board handleClick={handleUserProfile} />
      <RegionChoiceCard
        display={regionChoice ? "none" : "block"}
        handleChoice={handleChoice}
      />
     
      <Link to={link}>
        <div className="block">
          <button
            className="waves-effect green darken-3 btn"
            disabled={goButton}
            onClick={handleButton}
          >
            Let's start!
          </button>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Landing;
