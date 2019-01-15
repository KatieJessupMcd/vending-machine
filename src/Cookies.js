import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cookies extends Component {
  render() {
    return (
      <div className="Cookies">
        <h1>This is a Cookies</h1>
        <img
          style={{ height: '100vh' }}
          src="https://media.giphy.com/media/Z0lWsgfBeuv60/giphy.gif"
          alt="Cookies"
        />
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

export default Cookies;
