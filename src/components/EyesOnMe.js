// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

    focusEvent = () => {
        console.log("Good!")
    }

    onBlurEvent = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return (<button onFocus={this.focusEvent} onBlur={this.onBlurEvent}>Password Yasssssss!</button>)
    }
}

export default EyesOnMe