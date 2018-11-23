import React, {Component} from 'react'

class EyesOnMe extends React.Component {
  itsFocused = () => {
    console.log('Good!')
  }

  itsBlurred = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.itsFocused} onBlur={this.itsBlurred}>It's A Button</button>

    )
  }

}

export default EyesOnMe;
