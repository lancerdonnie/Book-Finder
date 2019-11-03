import React, { Component } from 'react';
import Input from './Components/Input.component';
import SubmitButton from './Components/SubmitButton.component';
import BookCollection from './Components/BookCollection.component';

import axios from 'axios';

class App extends Component {
  state = {
    volumes: null,
    totalItems: null,
    loading: true,
    input: '',
    option: null
  };
  handleSubmit = async () => {
    const urls = [
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}+&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}+inauthor:keyes&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    ];
    let url;
    if (this.state.option === 'a') {
    } else if (this.state.option === 'b') {
    } else if (this.state.option === 'c') {
    } else {
      url = urls[0];
    }
    let res = await axios.get(url);
    res = res.data;
    this.setState({
      volumes: res.items,
      totalItems: res.totalItems,
      loading: false
    });
    console.log(this.state.option);
  };
  handleInp = inpu => {
    this.setState({
      input: inpu
    });
  };
  handleOption = opt => {
    this.setState({
      option: opt
    });
  };
  render() {
    return (
      <div className='container'>
        <h1 className='tcenter'>Book Finder App</h1>
        <Input inp={this.handleInp} option={this.handleOption} />
        <SubmitButton submit={this.handleSubmit} />
        {!this.state.loading ? (
          <BookCollection
            loading={this.state.loading}
            items={this.state.volumes}
            totalItems={this.state.totalItems}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
