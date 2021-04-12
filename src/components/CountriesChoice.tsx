import React from "react";

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
  return (
    <div className="collection" style={{ display: props.display }}>
      {countries.map((el, index) => (
        <a className="collection-item">
          <span className="badge">
            <p>
              <label>
                <input type="checkbox" 
                defaultChecked={false}
                onClick={()=>props.handleChoice(el.name)}
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
