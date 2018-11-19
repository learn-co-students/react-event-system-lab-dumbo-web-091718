// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component{
render(){
  return <button onFocus={this.doFocus} onBlur={this.doBlur} />
}
doFocus = () => console.log('Good!')
doBlur = () => console.log('Hey! Eyes on me!')
}
