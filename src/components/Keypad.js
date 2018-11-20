// Code Keypad Component Here
import React, { Component } from 'react';

class KeyPad extends Component {
  render() {
    return (
      <input
      type="password"
      onKeyUp={ () => console.log('Entering password...') }
      />
    )
  }
}

export default KeyPad;
