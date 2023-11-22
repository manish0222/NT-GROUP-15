import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#0dcaf0"}}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                            <option value="usd">Select Currency</option>
                            <option value="dzd">Algerian dinar (DZD)</option>
                            <option value="aud">Australian dollar   (AUD)</option>
                            <option value="bwp">Botswana pula   (BWP) </option>
                            
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/">Currency 
                            Dashboard</a>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header