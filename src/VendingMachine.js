import React, { Component } from 'react';
import VendingPic from './VendingMachine.png';

const styleObj = {
  backgroundImage: `url(${VendingPic})`,
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};
class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine" style={styleObj}>
        <h1 style={{ margin: 0 }}>
          HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?!
        </h1>
      </div>
    );
  }
}

export default VendingMachine;
