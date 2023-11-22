import React, { Component } from 'react'
import CardSection from './components/CardSection';
import Header from './components/Header';
import ChartSection from './components/ChartSection';
import CurrencyConverter from './components/CurrencyConverter';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      Id: "USSR"
    }
  }

  fetchData = async () => {
    let data = await fetch('')
    let JsonData = await data.json()
    this.setState({Id:"INR"})
  }

  componentDidMount(){
    this.fetchData()
  }

  render() {
    return (
      <div>
        <Header />
        {/* <h1>{this.state.Id}</h1> */}
        <CurrencyConverter/>
        <ChartSection />
        <CardSection currencyName = {this.state.Id}/>
    
      </div>
    )
  }
}
