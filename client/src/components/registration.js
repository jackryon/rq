import React from 'react'
import LoginRegisterForm from './login-register-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLoginData } from '../actions'

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e) {
    debugger
  }

  handleInputChange(e) {
    e.preventDefault()
    debugger
    this.props.setLoginData(e)
  }

  render(){
    return(
      <div>
        <LoginRegisterForm
          handleInputChange={ this.handleInputChange }
          handleSubmit={ this.handleSubmit }
          loginData={ this.props.loginData }
          buttonLabel="Register"/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLoginData: setLoginData
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    loginData: state.loginData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
