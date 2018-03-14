import React from 'react'
import LoginRegisterForm from './login-register-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLoginData, register } from '../actions'

class Registration extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.register(this.props.loginData, '/api/users')
  }

  handleInputChange(e) {
    e.preventDefault()
    this.props.setLoginData(e)
  }

  render() {
    return(
      <div>
        reg form
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLoginData: setLoginData,
    register: register
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    loginData: state.loginData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
