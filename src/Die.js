import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = { number: 'one' };

  render = () => (
    <i
      className={`Die fas fa-dice-${this.props.number} ${this.props.rolling &&
        'shaking'}`}></i>
  );
}

export default Die;
