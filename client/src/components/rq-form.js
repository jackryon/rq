import React, { Component } from 'react'
import { formatDate } from '../util/helpers'

class RQForm extends Component {

  handleSubmit(e){
    e.preventDefault()
  }

  handleChange(e){

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
