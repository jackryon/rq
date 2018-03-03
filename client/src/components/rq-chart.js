import React from 'react'
import ReactHighcharts from 'react-highcharts'

class RQChart extends React.Component {

  componentDidMount() {
    this.chart = this.refs.chart.getChart();
  }

  chartConfig(){
    return {
      title: {
        text: 'rQ'
      },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%Y-%m-%d}',
          rotation: 45,
          align: 'left'
        }
      },
      series: [{
        type: 'spline',
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

export default RQChart
