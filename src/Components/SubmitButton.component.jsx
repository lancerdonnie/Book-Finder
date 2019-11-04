import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    return (
      <div className='search px'>
        <button onClick={this.props.submit} className='submit-button center'>
          Search
        </button>
      </div>
    );
  }
}

export default SubmitButton;
