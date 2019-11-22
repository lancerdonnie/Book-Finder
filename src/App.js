import React, { Component } from 'react';
import Input from './Components/Input.component';
import SubmitButton from './Components/SubmitButton.component';
import BookCollection from './Components/BookCollection.component';

import axios from 'axios';

let googleApiKey;
googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

// if (process.env.NODE_ENV !== 'production') {
//   googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
// } else {
//   googleApiKey = process.env.GOOGLE_API_KEY;
// }

class App extends Component {
  state = {
    volumes: null,
    totalItems: null,
    loading: true,
    input: '',
    showAlert: false
  };
  handleSubmit = async () => {
    if (this.state.input) {
      let res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&key=${googleApiKey}`
      );
      res = res.data;
      this.setState({
        volumes: res.items,
        totalItems: res.totalItems,
        loading: false
      });
    } else {
      // alert('Type a book name or author to search');
      this.setState({
        showAlert: true
      });
    }
  };
  handleInp = inpu => {
    this.setState({
      input: inpu
    });
  };

  render() {
    return (
      <div className='container'>
        <h1 className='tcenter heade'>Book Finder App</h1>
        <Input inp={this.handleInp} />
        {/* {
          if (this.state.showAlert===true){
            return (<div>please enter a valid name or author</div>)
          }
        } */}

        {this.state.showAlert ? (
          <div>please enter a valid name or author</div>
        ) : null}
        {() => {
          setTimeout(() => {
            this.setState({
              showAlert: false
            });
          }, 5000)();
        }}
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
