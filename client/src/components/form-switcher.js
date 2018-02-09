import React, { Component } from 'react'
import RQForm from './rq-form'
import PaceHRForm from './pace-hr-form'

class FormSwitcher extends Component {
  constructor(props){
    super(props)

    this.statics = {
      rQForm: 'RQForm',
      paceHRForm: 'PaceHRForm'
    }

    this.state = {
      activeChild: this.statics.RQForm
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    debugger
  }

  render(){
    return(
      <div>
        <label>
          <input type="radio"
            checked={ true }
            name="activeChild"
            value={ this.statics.rQForm }
            onChange={ this.handleChange }/>
          Enter rQ
        </label>
        <label>
          <input type="radio"
            checked={ this.state.activeChild == this.statics.paceHRForm }
            name="activeChild"
            value={ this.statics.paceHRForm }
            onChange={ this.handleChange }/>
          Enter Pace & Avg HR
        </label>
        <RQForm />
        <PaceHRForm />
      </div>
    )
  }
}

export default FormSwitcher
