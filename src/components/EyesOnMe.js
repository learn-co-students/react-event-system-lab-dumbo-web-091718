// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  blurHandler = (event) => {
    console.log("Hey! Eyes on me!");
  }

  focusHandler = (event) => {
    console.log("Good!");
  }

  render() {
    return <button onFocus={this.focusHandler} onBlur={this.blurHandler}> Blur me </button>
  }
}






export default EyesOnMe;
