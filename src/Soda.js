import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <h1>This is a Soda</h1>
        <img
          src="https://media.giphy.com/media/37QGsYyVuSKZdhd2IF/giphy.gif"
          alt="Soda"
        />
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

export default Soda;
