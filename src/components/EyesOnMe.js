import React, { Component } from 'react'

export default class EyesOnMe extends Component {
handleOnBlur = (e) => {
  // e.stopPropagation()
  console.log('Hey! Eyes on me!')
}
handleOnFocus = (e) => {
  // e.stopPropagation()
  console.log('Good!')
}
  render() {
    return (
      <div>
        <button onBlur={(e) => this.handleOnBlur(e)} onFocus={(e) => this.handleOnFocus(e)} >Clik me!</button> 
      </div>
    )
  }
}
