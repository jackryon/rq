import React, { Component } from 'react'
import RQForm from './rq-form'
import HRForm from './hr-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchForms } from '../actions/index'

class FormSwitcher extends Component {
  constructor(props){
    super(props)
  }

  handleChange(e){
    this.props.switchForms(e.target.value)
  }

  getActiveForm(){
    if(this.props.activeForm === 'rqForm'){
      <RQForm />
    } else {
      <HRForm />
    }
  }

  render(){
    const { activeForm } = this.props

    return(
      <div id="form-switcher">
        <div className="row" >
          <div className="col-xs-12">
            <label>
              <input type="radio"
                checked={ activeForm === 'rqForm' }
                value="rQForm"
                onChange={ (e) => { this.handleChange(e) }}/>
              Enter rQ
            </label>
            <label>
              <input type="radio"
                checked={ activeForm === 'hrForm' }
                value="hrForm"
                onChange={ (e) => this.handleChange(e) }/>
              Enter Pace & Avg HR
            </label>
          </div>
        </div>
        <div className="row" id="form-container">
          { this.getActiveForm() }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ switchForms: switchForms }, dispatch)
}

FormSwitcher.propTypes = {
  activeForm: PropTypes.string.isRequired,
  switchForms: PropTypes.func
}

export default connect(mapStateToProps, matchDispatchToProps)(FormSwitcher)
