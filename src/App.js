import React, { Component } from 'react';
import Input from './Components/Input.component';
import SubmitButton from './Components/SubmitButton.component';
import BookCollection from './Components/BookCollection.component';

import axios from 'axios';

class App extends Component {
  state = {
    volumes: null,
    totalItems: null,
    loading: true
  };
  handleSubmit = async () => {
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyAMSrdfXNovYo6ATbOWDGr9vua-2WRtTWc`
    );
    res = res.data;
    this.setState({
      volumes: res.items,
      totalItems: res.totalItems,
      loading: false
    });
  };
  render() {
    return (
      <div className='container'>
        <h1 className='tcenter'>Book Finder App</h1>
        <Input />
        <SubmitButton submit={this.handleSubmit} />
        {!this.state.loading ? (
          <>
            <p>
              There are {this.state.totalItems} books that appear for your
              search here
            </p>
            <BookCollection items={this.state.volumes} />
          </>
        ) : null}
      </div>
    );
  }
}

export default App;
