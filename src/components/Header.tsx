import React, { Component, useContext, useEffect } from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes, { InferProps } from "prop-types";
import CountriesStore from '../store/countriesStore'



type Props = {
  name: string
}

const Header  = (props: Props) =>{
  const CStore = useContext(CountriesStore)
  const {cleanContinentFilter, cleanCounryFilter} = CStore

  const cleanFilters = () => {
    console.log('cleaning')
    cleanContinentFilter()
    cleanCounryFilter()
  }
  // const renderContent = () => {
  //   return [
  //         <li key='3' style = {{margin: '0 10px'}}>User:{props.name}</li>,
  //          <li key='2'><a href="/api/logout">Logout</a></li>
  //   ]
  // }
    
        return (<nav>
       <div className="navbar-fixed green lighten-1 ">
          <Link
           to='/'
           onClick={cleanFilters}>
             <div className="brand-logo center">Dream destination</div> 
          </Link>
        </div>
      </nav>
        )}

export default Header