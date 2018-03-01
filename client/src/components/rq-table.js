import React, { Component } from 'react'
import { formatDate } from '../util'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { rqDelete } from '../actions'

class RQTable extends Component {

  getUIForState(){
    if(this.props.rqsIsLoading){
      return this.getLoading()
    } else if(this.props.rqsHasError){
      return this.getError()
    } else {
      return this.getRQTable()
    }
  }

  handleLinkClick(e){
    e.preventDefault()
    var rqId = e.target.dataset['rqid']
    this.props.rqDelete(rqId, process.env.REACT_APP_API_ENDPOINT)
  }

  getRQTable(){
    return(
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>rQ</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          { this.props.rqs.map(rq => {
            return(
              <tr key={ rq._id }>
                <td>{ formatDate(rq.date) }</td>
                <td>{ rq.value }</td>
                <td>
                  <a data-rqid={ rq._id }
                    href="#"
                    onClick={ (e) => this.handleLinkClick(e) }>
                    x
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  getLoading(){
    return <p>Loading...</p>
  }

  getError(){
    return <p>{ this.props.rqsError }</p>
  }

  render(){
    return (
      <div>
        <div className="row">
          <h3 className="col-xs-12">Raw rQ Data</h3>
        </div>
        <div className="row">
          { this.getUIForState() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    rqDelete: rqDelete
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RQTable)
