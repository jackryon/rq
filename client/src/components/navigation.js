import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return(
      <div>
        <Link to="/login">
          Login
        </Link>
        <Link to="/input-data">
          Input
        </Link>
        <Link to="/view-data">
          View
        </Link>
      </div>
    )
  }
}

export default Navigation
