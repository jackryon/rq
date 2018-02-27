import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { formatDate } from '../util'
import { connect } from 'react-redux'
import { defaultRQChanged } from '../actions'

class RQForm extends Component {

  handleSubmit(e){
    e.preventDefault()
  }

  handleChange(e){

  }

  render(){
    return(
      <div className="col-xs-12">
        <form id="rq-form" onSubmit={ (e) => this.handleSubmit(e) }>
          <div>
            <label>rQ:</label>
            <input type="text"
                  name="rq"
                  value={ this.props.defaultRQ.rq }
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RQForm)
