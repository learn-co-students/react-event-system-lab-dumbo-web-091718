// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {

  enteringPass = () => {
    console.log("Entering password...");
  }

  render(){
    return (
      <input type="password" onKeyUp={this.enteringPass} />
    )
  }

}


export default Keypad;
