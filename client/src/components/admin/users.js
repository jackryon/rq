import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUsers } from '../../actions'

class Users extends React.Component {

  componentDidMount() {
    this.props.getUsers('/api/admin/users')
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
            </tr>
          </thead>
          <tbody>
            { this.props.adminUsers.map(user => {
              return (
								<tr key={ user._id }>
                  <td>{ user.email }</td>
                  <td>{ user.fullName }</td>
                  <td>{ user.createdAt }</td>
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
    adminUsers: state.adminUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUsers: getUsers
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
