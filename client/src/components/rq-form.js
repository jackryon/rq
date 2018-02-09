import React, { Component } from 'react';

class RQForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      rQ: 45.75,
      date: new Date()
    }

    this.onRQChange = this.onRQChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    }).then(result => {
      debugger
      return result.json()
    }).then(data => {
      debugger
      if(data.errors) throw data.message
    })
  }

  onInputChange(){
    // implement this more general input handler!
  }

  onRQChange(e){
    this.setState({ rQ: e.currentTarget.value })
  }

  onDateChange(e){
    this.setState({ date: e.currentTarget.value })
  }

  render(){
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>rQ:</label>
          <input type="text"
                name="rq"
                value={ this.state.rQ }
                onChange={ this.onRQChange } />

          <label>Date</label>
          <input type="text"
                name="date"
                value={ this.state.date }
                onChange={ this.onDateChange } />

          <input type="submit" name="submit" />
        </form>
      </div>
    )
  }
}

export default RQForm
