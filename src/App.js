import React, { Component } from 'react';
import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        ' ',' ',' ',
        ' ,',' ',' ',
        ' ',' ',' '
      ],
      turn:'x'
    }
  }
  updateBoard(loc,player){

  }
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic-Toe-toe</h1>
          <Announcement/>
          <ResetButton/>
        </div>
         {this.state.gameBoard.map(function(value, i){
           <Tile key={i}
             loc={i}
             value={value}
             updateBoard={this.updateBoard.bind(this)}
             turn={this.state.turn}/>
         }.bind(this))}
      </div>
    );
  }
}

export default App;
