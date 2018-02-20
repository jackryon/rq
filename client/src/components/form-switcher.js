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
      activeChild: this.statics.rQForm
    }
  }

  handleChange(e){
    this.setState({
      activeChild: e.target.value
    })
  }

  getActiveChildComponent(){
    if(this.state.activeChild === this.statics.paceHRForm){
      return <PaceHRForm />
    } else {
      return <RQForm />
    }
  }

  render(){
    return(
      <div id="form-switcher">
        <div className="row" >
          <div className="col-xs-12">
            <label>
              <input type="radio"
                checked={ this.state.activeChild === this.statics.rQForm }
                value={ this.statics.rQForm }
                onChange={ (e) => this.handleChange(e) }/>
              Enter rQ
            </label>
            <label>
              <input type="radio"
                checked={ this.state.activeChild === this.statics.paceHRForm }
                value={ this.statics.paceHRForm }
                onChange={ (e) => this.handleChange(e) }/>
              Enter Pace & Avg HR
            </label>
          </div>
        </div>
        <div className="row" id="form-container">
          { this.getActiveChildComponent() }
        </div>
      </div>
    )
  }
}

export default FormSwitcher
