import React, { useContext, useEffect, useState } from "react";
import { IConditionsContext } from "../data/data";
import { Link } from "react-router-dom";
import Select from "./Select";
import { defaultConditions } from "../App";
import PropTypes from "prop-types";

interface IConditionType {
  name: string;
  value: string;
}

const Conditions = (data: IConditionsContext): JSX.Element => {
  const DataContext = useContext(defaultConditions);

  const handleSelect = (name: string, value: string) => {
    const newItem: IConditionType = { name, value };
    let foundOb = DataContext.find(e => e.name === newItem.name);
    Object.assign(foundOb, newItem)
  };

  const getData = () => {
    return Object.entries(data.data).map((item) => (
      <Select
        key={item[0]}
        name={item[1].name}
        values={item[1].values}
        handleChange={handleSelect}
      />
    ));
  };

  return (
    <div className="App">
      <form>
        <div className="block">
          <h2>{data.title}</h2>
        </div>
        <div className="block">{getData()}</div>
        <Link to={data.link}>
          <input
            className="waves-effect green darken-3 btn"
            type="submit"
            value="Next"
          />{" "}
        </Link>
      </form>
    </div>
  );
};


export default Conditions;
