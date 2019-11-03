import React, { Component } from 'react';
import spinner from '../assets/spinner.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='spinner center'>
        <img src={spinner} alt='loading' />
      </div>
    );
  }
}

export default Spinner;
