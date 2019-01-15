import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const navStyle = {
      backgroundColor: 'forestgreen',
      height: '10%'
    };
    const activeStyle = {
      fontWeight: 'bold',
      color: 'mediumorchid'
    };
    return (
      <nav style={navStyle}>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Vending Machine
        </NavLink>
        <NavLink to="/soda" activeStyle={activeStyle}>
          Soda
        </NavLink>
        <NavLink to="/cookies" activeStyle={activeStyle}>
          Cookies
        </NavLink>
        <NavLink to="/chips" activeStyle={activeStyle}>
          Chips
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
