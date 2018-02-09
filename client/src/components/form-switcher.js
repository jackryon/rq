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
      activeChild: this.RQForm
    }
  }

  render(){
    return(
      <div>
        <label>
          <input type="radio" checked="{ true }" name="activeChild" value="{ this.statics.rQForm }" />
          Enter rQ
        </label>
        <label>
          <input type="radio" name="activeChild" value="{ this.statics.paceHRForm }" />
          Enter Pace & Avg HR
        </label>
        <RQForm />
        <PaceHRForm />
      </div>
    )
  }
}

export default FormSwitcher
