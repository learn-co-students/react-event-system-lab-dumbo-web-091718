// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

    keyUpEvent = () => {
        console.log("Entering password...")
    }
    render(){
        return (<div><input type="password" placeholder="Enter Password" onKeyUp={this.keyUpEvent} /></div>)
    }
}

export default Keypad