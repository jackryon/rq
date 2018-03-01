import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { defaultRQChanged, rqPost } from '../actions'

class RQForm extends Component {

  handleSubmit(e){
    e.preventDefault()
    this.props.rqPost(this.props.defaultRQ,
      process.env.REACT_APP_API_ENDPOINT)
  }

  render(){
    return(
      <div className="col-xs-12">
        <form id="rq-form"
              onSubmit={ (e) => this.handleSubmit(e) }>
          <div>
            <label>rQ:</label>
            <input type="text"
                  name="value"
                  value={ this.props.defaultRQ.value }
                  onChange={ (e) => this.props.defaultRQChanged(e) } />
          </div>

          <div>
            <label>Date:</label>
            <input type="text"
                  name="date"
                  value={ this.props.defaultRQ.date }
                  onChange={ (e) => this.props.defaultRQChanged(e) } />
          </div>
          <div>
            <input type="submit" name="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { defaultRQ: state.defaultRQ }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    defaultRQChanged: defaultRQChanged,
    rqPost: rqPost
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RQForm)
