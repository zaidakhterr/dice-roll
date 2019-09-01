import React, { Component } from 'react';
import './RollDice.css';

import Die from './Die';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face1: 'one',
      face2: 'two',
      isRolling: false,
    };
  }

  static defaultProps = {
    diceFaces: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  roll = e => {
    const ran1 = Math.floor(Math.random() * 6);
    const ran2 = Math.floor(Math.random() * 6);
    this.setState({
      face1: this.props.diceFaces[ran1],
      face2: this.props.diceFaces[ran2],
      isRolling: true,
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-dice'>
          <Die number={this.state.face1} rolling={this.state.isRolling} />
          <Die number={this.state.face2} rolling={this.state.isRolling} />
        </div>
        <button
          className='RollDice-button'
          disabled={this.state.isRolling}
          onClick={this.roll}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
