import React from 'react'

class LoginRegisterForm extends React.Component {

  render() {
    return(
      <form onSubmit={ (e) => this.props.handleSubmit(e) }>
        <div>
          <label>Email</label><br />
          <input type="text"
            onChange={ (e) => this.props.handleInputChange(e) }
            name="email"
            value={ this.props.loginData.email } />
        </div>
        <div>
          <label>Password</label><br />
          <input type="password"
            onChange={ (e) => this.props.handleInputChange(e) }
            name="password"
            value={ this.props.loginData.password } />
        </div>
        <div>
          <input type="submit"
            value={ this.props.buttonLabel }
            className="btn btn-primary" />
        </div>
      </form>
    )
  }
}

export default LoginRegisterForm
