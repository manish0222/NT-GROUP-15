import React, { Component } from 'react'
import CardSection from './components/CardSection';
import Header from './components/Header';
import ChartSection from './components/ChartSection';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      Id: "USD"
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
        <h1>{this.state.Id}</h1>
        <CardSection currencyName = {this.state.Id}/>
        <ChartSection />
      </div>
    )
  }
}
