// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {

  printGood = () => {
    console.log("Good!");
  }

  printHey = () => {
    console.log("Hey! Eyes on me!");
  }

  render(){
    return (
      <button onFocus={this.printGood} onBlur={this.printHey} />
    )
  }

}


export default EyesOnMe;
