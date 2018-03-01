import React, { Component } from 'react'
import RQChart from './rq-chart'
import RQTable from './rq-table'

class ViewData extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-sm-6">
          <RQTable />
        </div>
        <div className="col-sm-6">
          <RQChart />
        </div>
      </div>
    )
  }
}

export default ViewData
