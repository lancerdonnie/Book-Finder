import React, { Component } from 'react';
import Input from './Components/Input.component';
import SubmitButton from './Components/SubmitButton.component';
import BookCollection from './Components/BookCollection.component';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='tcenter'>Book Finder App</h1>
        <Input />
        <SubmitButton />
        {/* <BookCollection /> */}
      </div>
    );
  }
}

export default App;
