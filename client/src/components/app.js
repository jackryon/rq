import React, { Component } from 'react'
import FormSwitcher from './form-switcher'
import RQChart from './rq-chart'
import RQTable from './rq-table'

class App extends Component {
  render(){
    return(
      <div>
        <header>
          <h1>Welcome to rQ App</h1>
        </header>
        <FormSwitcher />
        <RQTable />
        <RQChart />
      </div>
    )
  }
}

export default App
