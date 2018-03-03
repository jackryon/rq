import React from 'react'
import RQChart from './rq-chart'
import RQTable from './rq-table'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { rqsFetch } from '../actions'

class ViewData extends React.Component {

  componentDidMount(){
    this.props.rqsFetch(process.env.REACT_APP_API_ENDPOINT)
  }

  render(){
    return(
      <div className="row">
        <div className="col-sm-6">
          <RQTable rqsIsLoading={ this.props.rqsIsLoading }
            rqsHasErrored={ this.props.rqsHasErrored }
            rqs={ this.props.rqs } />
        </div>
        <div className="col-sm-6">
          <RQChart rqsIsLoading={ this.props.rqsIsLoading }
            rqsHasErrored={ this.props.rqsHasErrored }
            chartRQs={ this.props.chartRQs } />
        </div>
      </div>
    )
  }
}

const prepChartRQs = (rqs) => {
  return rqs.map((rq) => [rq.date, rq.value])
}

const mapStateToProps = (state) => {
  return {
    rqs: state.rqs,
    chartRQs: prepChartRQs(state.rqs),
    rqsIsLoading: state.rqsIsLoading,
    rqsHasErrored: state.rqsHasErrored
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    rqsFetch: rqsFetch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewData)
