import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      option: null
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
        <select
          name='option'
          id=''
          defaultValue='x'
          onChange={e => {
            this.props.option(e.target.value);
            this.setState({
              [e.target.name]: e.target.value
            });
          }}
        >
          <option value='x'>search criteria</option>
          <option value='a'>title</option>
          <option value='b'>author</option>
          <option value='c'>publisher</option>
        </select>
      </div>
    );
  }
}

export default Input;
