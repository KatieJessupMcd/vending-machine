import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>This is a Chips</h1>
        <img
          src="https://media.giphy.com/media/3ornk2v68yO67m4Le0/giphy.gif"
          alt="Chips"
        />
        <div className="chipCounter">
          <p>Bags Eaten: {this.props.count}</p>
          <button onClick={this.props.handleClick}>NOM NOM NOM</button>
          <div>
            <Link to="/">Go Back</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Chips;
