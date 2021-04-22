import './App.css';
import Header from './components/Header'
import 'materialize-css/dist/css/materialize.min.css';
import React, {useState, createContext} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing'
import Conditions from './components/Conditions'
import DataCenter from './components/DataCenter'
import SocialOrClimate from './components/SocialOrClimate'
import Slider from './components/userGameParameters/Typography'
import {preconditions, conditions} from './data/data'

export interface IConditionType {
  name: string;
  value: string;
}

const setDefConditions = (): IConditionType[] => {
  const defData: IConditionType[] = [];
  preconditions.data.forEach((element) => {
    defData.push({ name: element.name, value: element.values[0] });
  });
  conditions.data.forEach((element) => {
    defData.push({ name: element.name, value: element.values[0] });
  });
  return defData;
};

export const defaultConditions = createContext<IConditionType[]>(
  setDefConditions()
); 

function App() {
 return (
    <div className='container'>
    <Router>
        <div>
       <Header name={"ANN"}/>
       <Switch>
       <Route exact path = '/' component={Landing}/>
       <Route exact path="/prec" component={() => <Conditions {...preconditions} />} /> 
       <Route exact path="/cond" component={() => <Conditions {...conditions} />} /> 
       <Route exact path="/datacenter" component={DataCenter} /> 
       <Route exact path="/scenario" component={SocialOrClimate} />                       
       <Route exact path="/slider" component={Slider} />         </Switch>
       </div>
       </Router>

    </div>
  );
}

export default App;
