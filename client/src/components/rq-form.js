import React, { Component } from 'react'
import { formatDate, postRQ } from '../util/helpers'

class RQForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      rQ: 45.75,
      date: formatDate(new Date())
    }
  }

  handleSubmit(e){
    e.preventDefault()
    postRQ(this.state.rQ, this.state.date)
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    return(
      <div className="col-xs-12">
        <form id="rq-form" onSubmit={ (e) => this.handleSubmit(e) }>
          <div>
            <label>rQ:</label>
            <input type="text"
                  name="rQ"
                  value={ this.state.rQ }
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
            <input type="submit" name="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default RQForm
