import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { adminGetUsers, adminDeleteUser } from '../../actions'
import { formatDate } from '../../util'

class Users extends React.Component {

  componentDidMount() {
    this.props.adminGetUsers('/api/admin/users')
  }

  handleDeleteUser(e) {
    if(window.confirm('Are you really sure you want to do that?')) {
      let userId = e.target.dataset['userid']
      this.props.adminDeleteUser('/api/admin/users', userId)
    }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>email</td>
              <td>full name</td>
              <td>created</td>
              <td>confirmed?</td>
              <td>actions</td>
            </tr>
          </thead>
          <tbody>
            { this.props.adminUsers.map(user => {
              return (
								<tr key={ user._id }>
                  <td>{ user.email }</td>
                  <td>{ user.fullName }</td>
                  <td>{ formatDate(user.createdAt) }</td>
                  <td>{ user.confirmed === true ? 'true' : 'false' }</td>
                  <td>
                    <a href="#"
                      data-userid={ user._id }
                      onClick={ e => this.handleDeleteUser(e) }>X</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adminUsers: state.adminUsers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    adminGetUsers: adminGetUsers,
    adminDeleteUser: adminDeleteUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
