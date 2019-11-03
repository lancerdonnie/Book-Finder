import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // this.props.inp(this.state.input);
    this.props.inp(e.target.value);
  };
  render() {
    return (
      <div className='px '>
        <input
          className='main-input'
          type='text'
          placeholder='Search for a book'
          name='input'
          value={this.state.input}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default Input;
