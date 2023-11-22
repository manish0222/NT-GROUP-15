import React, { Component } from 'react';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {
  render() {
    return (
      <div className="currency-container" style={{marginTop: "50px", marginBottom: "50px"}}>
        <div className="box">
          <p className="box-text"> USD </p>
          <p className="box-number">$1</p>
        </div>
        <div className="box"  >
           <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            // style={{ width: "200px", height: "50px"}} 
                            // style={{marginTop: "15px", marginBottom: "15px", marginLeft: "5px"}} 
                            style={{marginLeft: "35px",marginRight: "35px", marginTop: "15px", display: 'flex',justifyContent: 'center', alignItems: 'center', width: "fit-content",fontSize: "18px"}} 
                            
                            onChange={this.props.handle_Submit}>
                            <option value="usd">Select Currency</option>
                            <option value="dzd">Algerian dinar (DZD)</option>
                            <option value="aud">Australian dollar   (AUD)</option>
                            <option value="bwp">Botswana pula   (BWP) </option>
          </select>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
