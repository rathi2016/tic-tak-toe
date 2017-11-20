import React, {Component} from 'react';
export default class Tile extends Component {
titleClick(props){
 props.updateBoard(props.loc, props.turn);
}
  render(){
    return (
      <div className={"title"+ this.props.loc} onClick={()=> this.titleClick(this.props)}>
      <p>{this.props.value}</p>
      </div>
    )
  }
}
