import React, { PropTypes } from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.handleClick(i)}
      />
    );
  }

  render() {
  }
