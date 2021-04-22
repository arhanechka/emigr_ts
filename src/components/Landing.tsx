import React, { useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import Board from "./Board";
import RegionChoiceCard from "./RegionChoiceCard";
import CountriesChoice from "./CountriesChoice";
import { IUserContext } from "../data/UserContext";

export const userContext = createContext<IUserContext>({
  scenario: "",
  regionMatched: false,
  countries: [],
});

const Landing = () => {
  const [goButton, setGoButton] = useState(true);
  const [regionChoice, setRegionChoice] = useState(true);
  const [counriesChoice, setCounriesChoice] = useState(false);

  const handleUserProfile = (choice: string): void => {
    if (choice.includes("game")) setRegionChoice(!regionChoice);
    else alert("This part is still developing. You can try destination game!");
  };

  useEffect(() => {
    console.log("выбор сделан");
  }, [goButton]);

  const handleChoice = (choice: string): void => {
    console.log(choice);
    if (choice === "yes") {
      setCounriesChoice(!counriesChoice);
      setGoButton(true);
    } else {
      setGoButton(false);
    }
  };

  return (
    <div>
      <Board handleClick={handleUserProfile} />
      <RegionChoiceCard
        display={regionChoice ? "none" : "block"}
        handleChoice={handleChoice}
      />
      <CountriesChoice
        display={!counriesChoice ? "none" : "block"}
        handleChoice={handleChoice}
      />
      <Link to="/scenario">
        <div className="block">
          <button
            className="waves-effect green darken-3 btn"
            disabled={goButton}
          >
            Let's start!
          </button>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Landing;
