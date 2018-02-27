import React, { Component } from 'react'
import { formatDate, postRQ, calculateRQ, getSpeedFromPace } from '../util'

class PaceHRForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      avgPace: "9:45",
      avgHR: "135",
      date: formatDate(new Date())
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault()

    var speed = getSpeedFromPace()
    postRQ(this.state.rQ, this.state.date)
  }


  render(){
    return(
      <div>
        <form id="pace-hr-form" onSubmit={ (e) => this.handleSubmit(e) }>
          <div>
            <label>Avg Pace/Mile:</label>
            <input type="text"
                  name="avgPace"
                  value={ this.state.avgPace }
                  onChange={ (e) => this.handleChange(e) } />
          </div>
          <div>
            <label>Avg Heart Rate:</label>
            <input type="text"
                  name="avgHR"
                  value={ this.state.avgHR }
                  onChange={ (e) => this.handleChange(e) } />
          </div>
          <div>
            <label>Date:</label>
            <input type="text"
                  name="date"
                  value={ this.state.date }
                  onChange={ (e) => this.handleChange(e) } />
          </div>
          <div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default PaceHRForm
