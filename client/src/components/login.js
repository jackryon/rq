import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLoginData, login } from '../actions'
import { Link } from 'react-router-dom'
import LoginRegisterForm from './login-register-form'

class Login extends React.Component {
  constructor() {
    super()
    this.handleInputChange.bind(this)
    this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.login(e, '/api/sessions')
  }

  handleInputChange(e){
    e.preventDefault()
    this.props.setLoginData(e)
  }

  render(){
    return(
      <div>
        <LoginRegisterForm
          handleSubmit={ this.handleSubmit }
          handleInputChange={ this.handleInputChange }
          loginData={ this.props.loginData }
          buttonLabel="Login" />
        <p>or <Link to="/register">Register Here </Link></p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLoginData: setLoginData,
    login: login
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    loginData: state.loginData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
