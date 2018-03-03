import React from 'react'
import { formatDate, postRQ, calculateRQ, getSpeedFromPace } from '../util'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { defaultHRDataChanged } from '../actions'

class PaceHRForm extends React.Component {

  handleChange(e){
    this.props.defaultHRDataChanged(e)
  }

  handleSubmit(e){
    e.preventDefault()

    let speed = getSpeedFromPace(this.props.defaultHRData.pace)
    let rq = calculateRQ(speed, this.props.defaultHRData.hr)
  }


  render(){
    return(
      <div>
        <form id="pace-hr-form" onSubmit={ (e) => this.handleSubmit(e) }>
          <div>
            <label>Avg Pace/Mile:</label>
            <input type="text"
                  name="pace"
                  value={ this.props.defaultHRData.pace }
                  onChange={ (e) => this.handleChange(e) } />
          </div>
          <div>
            <label>Avg Heart Rate:</label>
            <input type="text"
                  name="hr"
                  value={ this.props.defaultHRData.hr }
                  onChange={ (e) => this.handleChange(e) } />
          </div>
          <div>
            <label>Date:</label>
            <input type="text"
                  name="date"
                  value={ this.props.defaultHRData.date }
                  onChange={ (e) => this.handleChange(e) } />
          </div>
          <div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    defaultHRDataChanged: defaultHRDataChanged
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    defaultHRData: state.defaultHRData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaceHRForm)
