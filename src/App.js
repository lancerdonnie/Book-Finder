import React, { Component } from 'react';
import Input from './Components/Input.component';
import SubmitButton from './Components/SubmitButton.component';
import BookCollection from './Components/BookCollection.component';
import Spinner from './Components/Spinner';

import axios from 'axios';

class App extends Component {
  state = {
    volumes: null,
    totalItems: null,
    loading: true,
    input: ''
  };
  handleSubmit = async () => {
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&key=AIzaSyAMSrdfXNovYo6ATbOWDGr9vua-2WRtTWc`
    );
    res = res.data;
    this.setState({
      volumes: res.items,
      totalItems: res.totalItems,
      loading: false
    });
  };
  handleInp = inpu => {
    this.setState({
      input: inpu
    });
    // console.log(this.state.input);
  };
  render() {
    return (
      <div className='container'>
        <h1 className='tcenter'>Book Finder App</h1>
        <Input inp={this.handleInp} />
        <SubmitButton submit={this.handleSubmit} />
        {!this.state.loading ? (
          <>
            <p>
              There are {this.state.totalItems} books that appear for your
              search here
            </p>
            <BookCollection items={this.state.volumes} />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default App;
