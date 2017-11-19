import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        ' ',' ',' ',
        ' ,',' ',' ',
        ' ',' ',' '
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic-Toe-toe</h1>
          <Announcement/>
          <ResetButton/>
        </div>
         {this.stat.gameBoard.map(function(value, i){
           <Tile/>
         })}
      </div>
    );
  }
}

export default App;
