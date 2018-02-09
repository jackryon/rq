import React from 'react'

class RQTable extends React.Component {
  constructor(props){
    super(props)
    this.state = { rQs: []}
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
      <table>
        <thead>
          <tr>
            <td>rQ</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          { this.state.rQs.map(rQ => {
            return(
              <tr key={ rQ._id }>
                <td>{ rQ.value }</td>
                <td>{ rQ.date }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default RQTable
