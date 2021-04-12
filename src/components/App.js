import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {Provider} from 'react-redux'

import Header from './Header'
import Landing from './Landing'
import store from '../store/store'
import Conditions from './Conditions'
import DataCenter from './DataCenter'


class App extends Component {
componentDidMount(){
    // console.log("fetching")
    // this.props.fetchUser();
}

    render() {
   return ( 
    <Provider store={store}>
   <div className='container'>
        <BrowserRouter>
       <div>
       <Header />
           <Route exact path = '/' component={Landing}/>
           <Route exact path="/prec" render={(props) => <Conditions {...props} title={`Preconditions`}/>} />            
        <Route exact path="/cond" render={(props) => <Conditions {...props} title={`Conditions`}/>} />
        <Route exact path="/result" component={DataCenter} />      
       </div>
        </BrowserRouter>
        
    </div>
    </Provider>
   )
}
}


export default App;