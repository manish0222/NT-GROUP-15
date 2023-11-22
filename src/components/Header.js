// import React, { Component } from 'react'

// export class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#0dcaf0"}}>
//                     <div className="container-fluid">


//                         <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
//                             style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/">Currency 
//                             Dashboard</a>

//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }

// export default Header


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

