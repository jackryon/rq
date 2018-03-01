import React from 'react'
import ReactHighcharts from 'react-highcharts'

class RQChart extends React.Component {

  componentDidMount() {
    this.chart = this.refs.chart.getChart();
  }

  componentWillUnmount(){
    //this.chart.destroy()
  }

  chartConfig(){
    return {
      yAxis: {
        type: 'datetime'
      },
      series: [{
        type: 'area',
        name: 'rQ',
        data: this.props.chartRQs
      }]
    }
  }

  render(){
    return(
      <div>
        <h3>rQ Chart</h3>
        <div id="chart-container"></div>
        <ReactHighcharts config={ this.chartConfig() } ref="chart"></ReactHighcharts>
      </div>
    )
  }
}

const prepRQsForChart = (rqs) => {
  rqs.map(rq => {
    [rq.date, rq.value]
  })
}

export default RQChart
