// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
  handlePasswordField = (e) => {
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <input type="password" name="password" onKeyUp={this.handlePasswordField} />
      </div>
    )
  }
}
