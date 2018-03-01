import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return(
      <div className="row" id="nav">
        <div className="col-sm-2 no-pad">
          <Link to="/login">
            Login
          </Link>
        </div>
        <div className="col-sm-2 no-pad">
          <Link to="/input-data">
            Input Data
          </Link>
        </div>
        <div className="col-sm-2 no-pad">
          <Link to="/view-data">
            View Data
          </Link>
        </div>
      </div>
    )
  }
}

export default Navigation
