import React from 'react';
import Board from './board';
import calculateWinner from '../util/CalculateWinner';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(i) {
      // const history = this.state.history;
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
      });
    }
    jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Move # ${move}` : 'Game start';
      return (
        <li key={move}>
          <a href="##" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });
    let status;
        if (winner) {
          status = `Winner: ${winner}`;
        } else {
          status = `Next player: ${(this.state.xIsNext ? 'X' : 'O')}`;
        }
        return (
          <div className="game">
            <div className="game-board">
              <Board
                squares={current.squares}
                handleClick={this.handleClick}
              />
            </div>
            <div className="game-info">
              <div className="status">{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
        );
      }
    }
