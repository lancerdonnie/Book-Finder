import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className='px '>
        <input
          className='main-input'
          type='text'
          placeholder='Search for a book'
        />
      </div>
    );
  }
}

export default Input;
