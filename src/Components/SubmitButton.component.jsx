import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    return (
      <div className='px'>
        <button onClick={this.props.submit} className='submit-button'>
          Search
        </button>
      </div>
    );
  }
}

export default SubmitButton;
