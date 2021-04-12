import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../data/logo.png'

type Props = {
  name: string
}

class Header extends Component<Props>{

  renderContent () {
    return [
          <li key='3' style = {{margin: '0 10px'}}>User:{this.props.name}</li>,
           <li key='2'><a href="/api/logout">Logout</a></li>
    ]
  }
    render(){
        return <nav>
       <div className="navbar-fixed green lighten-1 ">
          <Link
           to='/'>
           {/* <img className="brand-logo logo_img" src={logo} alt="Logo" /> */}
             <div className="brand-logo center">Dream destination</div> 
          </Link>
          <ul className="right">
            <li>
              <a>{this.renderContent()}</a>
            </li>
          </ul>
        </div>
      </nav>
    }
}

export default Header