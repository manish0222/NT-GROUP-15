import React, { Component } from 'react'
import ReactApexChart from "react-apexcharts";
import ApexCharts from 'apexcharts';
import './CurrencyConverter.css';

export class ChartSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Price: {
        options: {
          chart: {
            id: 'area-datetime',
          },
          grid: {
            show: false
          }, title: {
            text: "Currency Price w.r.t USD",
            style: {
              fontSize: '14px', fontWeight: 'bold', color: "#0dcaf0"
            }
          }, stroke: {
            curve: 'smooth'
          }, xaxis: {
            type: "datetime"
          }, dataLabels: {
            enabled: false
          }, yaxis: {
            show: true
          }, colors: ["#0dcaf0"],
          tooltip: {
            y: {
              formatter: (value) => { return value.toFixed(2) }
            }
          }, selection: 'one_year',
        },
        series: [
          {
            name: 'Currency Value w.r.t USD',
            data: [
              [1327359600000, 30.95],
            ]
          }
        ]
      }
    };
  }
  minmax = {
    mx: 0,
    mn: 0
  }
  prevId = this.props.currencyName
  fetchData = async () => {
    console.log(this.props.currencyName)
    let chartData = await fetch('http://localhost:4000/' + this.props.currencyName);
    let jsonChartData = await chartData.json()
    console.log(chartData, jsonChartData)
    this.setState({ Price: { options: this.state.Price.options, series: [{ name: 'Currency Value w.r.t USD', data: jsonChartData.ans }] } })
    this.minmax = jsonChartData.obj
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate() {
    if (this.prevId !== this.props.currencyName) {
      this.prevId = this.props.currencyName
      this.fetchData()
    }
  }


  updateData(timeline) {
    this.setState({
      selection: timeline
    })

    switch (timeline) {
      case 'one_month':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 July 2022').getTime(),
          new Date('26 Aug 2022').getTime()
        )
        break
      case 'six_months':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Feb 2022').getTime(),
          new Date('27 Aug 2022').getTime()
        )
        break
      case 'one_year':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Feb 2021').getTime(),
          new Date('27 Feb 2022').getTime()
        )
        break
      case 'ytd':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('01 Jan 2020').getTime(),
          new Date('27 Feb 2022').getTime()
        )
        break
      case 'all':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('03 Jan 2012').getTime(),
          new Date('26 Aug 2022').getTime()
        )
        break
      default:
    }
  }

  render() {
    return (
      <div>
        <center>
          <div className="container">

            <div id="chart">

              <div className="toolbar" style={{ marginBottom: '20px !important', marginleft: '50% !important' }}>
                <button id="one_month"

                  onClick={() => this.updateData('one_month')} className={(this.state.selection === 'one_month' ? 'active' : '')}>
                  1M
                </button>
                &nbsp;
                <button id="six_months"

                  onClick={() => this.updateData('six_months')} className={(this.state.selection === 'six_months' ? 'active' : '')}>
                  6M
                </button>
                &nbsp;
                <button id="one_year"


                  onClick={() => this.updateData('one_year')} className={(this.state.selection === 'one_year' ? 'active' : '')}>
                  1Y
                </button>
                &nbsp;
                <button id="ytd"

                  onClick={() => this.updateData('ytd')} className={(this.state.selection === 'ytd' ? 'active' : '')}>
                  YTD
                </button>
                &nbsp;
                <button id="all"

                  onClick={() => this.updateData('all')} className={(this.state.selection === 'all' ? 'active' : '')}>
                  ALL
                </button>
              </div>

              <ReactApexChart
                options={this.state.Price.options}
                series={this.state.Price.series}
                type="area"
                height='400'
                width='100%' />

            </div>
          </div>
        </center>
        <div className="currency-container" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <div className="box">
            <p className="box-text"> ALL TIME HIGH </p>
            <p className="box-number">{this.minmax.mx}</p>
          </div>
          <div className="box">
            <p className="box-text"> ALL TIME LOW </p>
            <p className="box-number">{this.minmax.mn}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default ChartSection