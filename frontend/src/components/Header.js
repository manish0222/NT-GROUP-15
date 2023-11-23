import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1 style={titleStyle}>CURRENCY DASHBOARD</h1>
      </div>
    );
  }
}

const headerStyle = {
  backgroundColor: '#001f3f', // Dark blue background color
  color: '#fff', // White text color
  textAlign: 'center',
  padding: '20px', // Adjust padding as needed
};

const titleStyle = {
  margin: '0', // Remove default margin for h1
};

export default Header;

