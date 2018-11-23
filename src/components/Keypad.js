import React, {Component} from 'react'

class Keypad extends React.Component {

  actionHandler = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input onKeyUp={() => this.actionHandler()}type="password" />
      </div>
    )
  }

}

export default Keypad;
