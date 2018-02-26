import React from 'react'
import ReactDOM from 'react-dom'
import { formatDate } from '../util/helpers'

class RQTable extends React.Component {
  constructor(props){
    super(props)
    this.state = { rQs: [] }
  }

  componentDidMount(){
    //getRQ(this, this.handleRQGet)
  }

  handleRQGet(data){
    this.setState({ rQs: data })
  }

  render(){
    return (
      <div>
        <div className="row">
          <h3 className="col-xs-12">Raw rQ Data</h3>
        </div>
        <div className="row">
          <table>
            <thead>
              <tr>
                <td>Date</td>
                <td>rQ</td>
              </tr>
            </thead>
            <tbody>
              { this.state.rQs.map(rQ => {
                return(
                  <tr key={ rQ._id }>
                    <td>{ formatDate(rQ.date) }</td>
                    <td>{ rQ.value }</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default RQTable
