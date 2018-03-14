import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLoginData, login } from '../actions'
import { Link } from 'react-router-dom'
import LoginRegisterForm from './login-register-form'

class Login extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(e, '/api/sessions')
  }

  handleInputChange(e) {
    e.preventDefault()
    this.props.setLoginData(e)
  }

  render() {
    return(
      <div>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <div>
            <label>Email</label><br />
            <input type="text"
              onChange={ (e) => this.handleInputChange(e) }
              name="email"
              value={ this.props.loginData.email } />
          </div>
          <div>
            <label>Password</label><br />
            <input type="password"
              onChange={ (e) => this.handleInputChange(e) }
              name="password"
              value={ this.props.loginData.password } />
          </div>
          <div>
            <input type="submit"
              value={ this.props.buttonLabel }
              className="btn btn-primary" />
          </div>
        </form>
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
