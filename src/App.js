import React, { Component } from 'react';
import Input from './Components/Input.component';
import SubmitButton from './Components/SubmitButton.component';
import BookCollection from './Components/BookCollection.component';

import axios from 'axios';

class App extends Component {
  state = {
    volumes: null,
    totalItems: null,
    loading: false,
    input: ''
  };
  handleSubmit = async () => {
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    res = res.data;
    this.setState({
      volumes: res.items,
      totalItems: res.totalItems,
      loading: true
    });
  };
  handleInp = inpu => {
    this.setState({
      input: inpu
    });
  };
  render() {
    return (
      <div className='container'>
        <h1 className='tcenter'>Book Finder App</h1>
        <Input inp={this.handleInp} />
        <SubmitButton submit={this.handleSubmit} />
        {this.state.loading ? (
          <>
            <p>
              There are {this.state.totalItems} books that appear for your
              search here
            </p>
            <BookCollection
              loading={this.state.loading}
              items={this.state.volumes}
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default App;
