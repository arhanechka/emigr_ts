import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes, { InferProps } from "prop-types";


type Props = {
  name: string
}

const Header  = (props: Props) =>{

  // const renderContent = () => {
  //   return [
  //         <li key='3' style = {{margin: '0 10px'}}>User:{props.name}</li>,
  //          <li key='2'><a href="/api/logout">Logout</a></li>
  //   ]
  // }
    
        return (<nav>
       <div className="navbar-fixed green lighten-1 ">
          <Link
           to='/'>
           {/* <img className="brand-logo logo_img" src={logo} alt="Logo" /> */}
             <div className="brand-logo center">Dream destination</div> 
          </Link>
        </div>
      </nav>
        )}

export default Header