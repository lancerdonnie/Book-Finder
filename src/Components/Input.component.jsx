import React, { Component } from 'react';

class Input extends Component {
  state = {
    input: ''
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
          onChange={e => {
            this.setState({
              [e.target.name]: e.target.value
            });
            console.log(this);
            this.props.inp(this.state.input);
          }}
        />
      </div>
    );
  }
}

export default Input;
