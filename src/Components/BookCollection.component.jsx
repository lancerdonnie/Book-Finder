import React, { Component } from 'react';
import BookItem from './BookItem.component';
import Spinner from './Spinner';
class BookCollection extends Component {
  render() {
    const { items } = this.props;
    return !this.props.loading ? (
      <div>
        <p>
          There are {this.props.totalItems} books that appear for your search
          here
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
