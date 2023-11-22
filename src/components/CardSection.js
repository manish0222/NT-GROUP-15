import React, { Component } from 'react'
import './CurrencyConverter.css';


export class CardSection extends Component {
    render() {
        return (
            <div className="currency-container" style={{marginTop: "50px", marginBottom: "50px"}}>
        <div className="box">
          <p className="box-text"> ALL TIME HIGH </p>
          <p className="box-number">$350</p>
        </div>
        <div className="box">
        <p className="box-text"> ALL TIME LOW </p>
          <p className="box-number">$80</p>
        </div>
      </div>
        )
    }
}

export default CardSection