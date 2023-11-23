import React, { Component } from 'react'
import Header from './components/Header';
import ChartSection from './components/ChartSection';
import CurrencyConverter from './components/CurrencyConverter';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currency: "USD",
      Data: {}
    }
  }

  handleSubmit = async (event) => {
    console.log(event.target.value)
    this.setState({ currency: event.target.value, Data: this.state.Data })
  }

  render() {
    return (
      <div>
        <Header />
        <CurrencyConverter handle_Submit={this.handleSubmit} />
        <center><h1>{this.state.currency} / USD</h1></center>
        <ChartSection currencyName={this.state.currency} />

      </div>
    )
  }
}
