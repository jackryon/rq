import React, { Component } from 'react'
import FormSwitcher from './form-switcher'
import RQChart from './rq-chart'
import RQTable from './rq-table'

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <header className="col-xs-12">
            <h1>Welcome to rQ App</h1>
          </header>
        </div>

        <FormSwitcher activeForm="rqForm" />
        { /* <RQTable /> */ }
        { /* <RQChart /> */ }
      </div>
    )
  }
}

export default App
