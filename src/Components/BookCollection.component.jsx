import React, { Component } from 'react';
import BookItem from './BookItem.component';

class BookCollection extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className='book-items'>
        {items.map(item => {
          return <BookItem item={item} />;
        })}
      </div>
    );
  }
}

export default BookCollection;
