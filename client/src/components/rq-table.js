import React from 'react'
import formatDate from '../util/helpers'

class RQTable extends React.Component {
  constructor(props){
    super(props)
    this.state = { rQs: [] }
  }

  componentDidMount(){
    fetch(process.env.REACT_APP_API_ENDPOINT)
      .then(result => {
        return result.json()
      })
      .then(data => {
        this.setState({ rQs: JSON.parse(data) })
      })
  }

  render(){
    return (
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
    )
  }
}

export default RQTable
