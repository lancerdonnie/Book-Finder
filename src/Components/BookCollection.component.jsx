import React, { Component } from 'react';
import BookItem from './BookItem.component';
import Spinner from './Spinner';
class BookCollection extends Component {
  render() {
    const { items } = this.props;
    return !this.props.loading ? (
      <div className='book-collection'>
        <p className='total-items'>
          There are
          <span className='text-sec'> {this.props.totalItems} books</span> that
          appear for your search here
        </p>
        <div className='book-items'>
          {items.map(item => {
            return <BookItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default BookCollection;
