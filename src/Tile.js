import React, {Component} from 'react';
export default class Tile extends Component {

  render(){
    return (
      <div >
      <p>{this.props.value}</p>
      </div>
    )
  }
}
