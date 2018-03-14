import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setRegistrationData, register, flashMessage } from '../actions'
import { validateEmail } from '../util'

class Registration extends React.Component {

  handleSubmit(e) {
    e.preventDefault()

    if(!this.hasFullName()) {
      this.flash('Please enter your full name!')
    } else if(!this.hasValidEmail()) {
      this.flash('Please enter a valid email!')
    } else if(!this.hasPassword()) {
      this.flash('Please enter a password')
    } else if(!this.passwordsMatch()) {
      this.flash('Password and password confirmation must match!')
    } else {
      this.props.register(this.props.registrationData, '/api/users')
    }
  }

  hasPassword() {
    return this.props.registrationData.password !== ''
  }

  hasFullName() {
    return this.props.registrationData.fullName !== ''
  }

  hasValidEmail() {
    let email = this.props.registrationData.email
    if(email === '') return false
    return validateEmail(email)
  }

  flash(msg) {
    this.props.flashMessage(msg, 2000)
  }

  passwordsMatch() {
    return this.props.registrationData.password ===
      this.props.registrationData.passwordConfirmation
  }

  handleInputChange(e) {
    e.preventDefault()
    this.props.setRegistrationData(e)
  }

  render() {
    return(
      <div>
        <form onSubmit={ (e) => this.handleSubmit(e) } >
          <div>
            <label>Full Name:</label><br />
            <input type="text"
              onChange={ (e) => this.handleInputChange(e) }
              name="fullName"
              value={ this.props.registrationData.fullName } />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="text"
              onChange={ (e) => this.handleInputChange(e) }
              name="email"
              value={ this.props.registrationData.email } />
          </div>
          <div>
            <label>Password:</label><br />
            <input type="password"
              onChange={ (e) => this.handleInputChange(e) }
              name="password"
              value={ this.props.registrationData.password } />
          </div>
          <div>
          <label>Password Confirmation:</label><br />
            <input type="password"
              onChange={ (e) => this.handleInputChange(e) }
              name="passwordConfirmation"
              value={ this.props.registrationData.passwordConfirmation } />
          </div>
          <div>
            <input type="submit"
              value="Register"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setRegistrationData: setRegistrationData,
    register: register,
    flashMessage: flashMessage
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    registrationData: state.registrationData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
