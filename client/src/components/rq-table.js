import React, { Component } from 'react'
import { formatDate } from '../util/helpers'
import { bindActionCreators } from 'redux'
import { rqsIsLoading, rqsHasErrored, rqsFetch } from '../actions/index'
import { connect } from 'react-redux'

class RQTable extends Component {

  componentDidMount(){
    this.props.rqsFetch(process.env.REACT_APP_API_ENDPOINT)
  }

  getUIForState(){
    if(this.props.rqsLoading){
      return this.getLoading()
    } else if(this.props.rqsError){
      return this.getError()
    } else {
      return this.getRQTable()
    }
  }

  getRQTable(){
    return(
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>rQ</td>
          </tr>
        </thead>
        <tbody>
          { this.props.rqs.map(rq => {
            return(
              <tr key={ rq._id }>
                <td>{ formatDate(rq.date) }</td>
                <td>{ rq.value }</td>
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

function mapStateToProps(state){
  return {
    rqs: state.rqs,
    rqsIsLoading: state.rqsIsLoading,
    rqsError: state.rqsError
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    rqsFetch: rqsFetch,
    rqsLoading: rqsIsLoading,
    rqsError: rqsHasErrored
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RQTable)
