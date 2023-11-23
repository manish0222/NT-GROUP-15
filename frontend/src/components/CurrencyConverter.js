import React, { Component } from 'react';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {
  render() {
    return (
      <div className="currency-container" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="box">
          <p className="box-text"> USD </p>
          <p className="box-number">$1</p>
        </div>
        <div className="box"  >
          <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
            style={{ marginLeft: "35px", marginRight: "35px", marginTop: "15px", display: 'flex', justifyContent: 'center', alignItems: 'center', width: "fit-content", fontSize: "18px" }}

            onChange={this.props.handle_Submit}>
            <option value="USD">Select Currency</option>
            <option value="DZD">Algerian dinar (DZD)</option>
            <option value="AUD">Australian dollar (AUD)</option>
            <option value="BWP">Botswana pula (BWP) </option>
            <option value="BRL">Brazilian real   (BRL) </option>
            <option value="BND">Brunei dollar   (BND) </option>
            <option value="CAD">Canadian dollar   (CAD)</option>
            <option value="CLP">Chilean peso   (CLP)</option>
            <option value="CNY">Chinese yuan   (CNY)</option>
            <option value="CZK">Czech koruna   (CZK)</option>
            <option value="DKK">Danish krone   (DKK)</option>
            <option value="EUR">Euro   (EUR)</option>
            <option value="INR">Indian rupee   (INR)</option>
            <option value="ILS">Israeli New Shekel   (ILS)</option>
            <option value="JPY">Japanese yen   (JPY)</option>
            <option value="KRW">Korean won   (KRW)</option>
            <option value="KWD">Kuwaiti dinar   (KWD)</option>
            <option value="MYR">Malaysian ringgit   (MYR)</option>
            <option value="MUR">Mauritian rupee   (MUR)</option>
            <option value="MXN">Mexican peso   (MXN)</option>
            <option value="NZD">New Zealand dollar   (NZD)</option>
            <option value="NOK">Norwegian krone   (NOK)</option>
            <option value="OMR">Omani rial   (OMR)</option>
            <option value="PEN">Peruvian sol   (PEN)</option>
            <option value="PHP">Philippine peso   (PHP)</option>
            <option value="PLN">Polish zloty   (PLN)</option>
            <option value="QAR">Qatari riyal   (QAR)</option>
            <option value="RUB">Russian ruble   (RUB)</option>
            <option value="SAR">Saudi Arabian riyal   (SAR)</option>
            <option value="SGD">Singapore dollar   (SGD)</option>
            <option value="ZAR">South African rand   (ZAR)</option>
            <option value="SEK">Swedish krona   (SEK)</option>
            <option value="CHF">Swiss franc   (CHF)</option>
            <option value="THB">Thai baht   (THB)</option>
            <option value="TTD">Trinidadian dollar   (TTD)</option>
            <option value="AED">U.A.E. dirham   (AED)</option>
            <option value="GBP">U.K. pound   (GBP)</option>
            <option value="USD">U.S. dollar   (USD)</option>
            <option value="UYU">Uruguayan peso   (UYU)</option>
          </select>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
