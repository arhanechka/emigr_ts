import "./App.css";
import Header from "./components/Header";
import "materialize-css/dist/css/materialize.min.css";
import { createContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import UserWightsBoard from "./components/userGameParameters/UserWeightsBoard";
import { preconditions, conditions } from "./data/data";
import CountriesChoice from "./components/CountriesChoice";
import ContinentsChoice from "./components/ContinentsChoice";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Result from './components/Result'

export interface IConditionType {
  name: string;
  value: string;
}

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
    <div className="container">
      <Router>
        <div>
          <Header name={"ANN"} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/cont" component={ContinentsChoice} />
            <Route exact path="/countries" component={CountriesChoice} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/slider" component={UserWightsBoard} />{" "}
          </Switch>
        </div>
      </Router>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
