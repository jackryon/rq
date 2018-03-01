import React, { Component } from 'react'
import RQForm from './rq-form'
import HRForm from './hr-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchForm } from '../actions/index'

class FormSwitcher extends Component {

  getActiveForm(){
    if(this.props.activeForm === 'rqForm'){
      return <RQForm />
    } else {
      return <HRForm />
    }
  }

  render(){
    var activeForm = this.props.activeForm

    return(
      <div id="form-switcher" className="row">
        <div className="col-xs-12">
          <div className="row">
            <label>
              <input type="radio"
                checked={ activeForm === 'rqForm' }
                value="rqForm"
                onChange={ (e) => { this.props.switchForm(e.target.value) }} />
              Enter rQ
            </label>
            <label>
              <input type="radio"
                checked={ activeForm === 'hrForm' }
                value="hrForm"
                onChange={ (e) => { this.props.switchForm(e.target.value) }} />
              Enter Pace & Avg HR
            </label>
          </div>
          <div className="row">
            <div className="col-xs-12" id="form-container">
              { this.getActiveForm() }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeForm: state.activeForm }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ switchForm: switchForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSwitcher)
