import React, { Component } from 'react';
import BookItem from './BookItem.component';

class BookCollection extends Component {
  render() {
    return (
      <div>
        <BookItem item={this.props.items[0]} />
        {/* {console.log(this.props.items)} */}
      </div>
    );
  }
}

export default BookCollection;
