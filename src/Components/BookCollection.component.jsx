import React, { Component } from 'react';
import BookItem from './BookItem.component';
import Spinner from './Spinner';
class BookCollection extends Component {
  render() {
    const { items } = this.props;
    return this.props.loading ? (
      <div className='book-items'>
        {items.map(item => {
          return <BookItem item={item} />;
        })}
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default BookCollection;
