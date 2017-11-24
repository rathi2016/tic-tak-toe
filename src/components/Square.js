import React, { PropTypes } from 'react';

export default class Square extends React.PureComponent {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }

}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
