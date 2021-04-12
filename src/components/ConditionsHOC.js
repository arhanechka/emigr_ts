import React from "react";
import Select from "./Select";
import { Link } from "react-router-dom";
import { PreconditionsContext, IConditionsContext } from "../data/data";

export const conditionHOC = (Component, selectedData) =>
  class ConditionHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectedData
      };
    }
      render() {
        return (
          <ConditionHOC data = {this.state.data}/>
        )
      }
  } 


