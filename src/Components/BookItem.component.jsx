import React, { Component } from 'react';

class BookItem extends Component {
  render() {
    const { id, selfLink } = this.props.item;
    const {
      title,
      authors,
      publisher,
      publishedDate,
      description,
      pageCount,
      infoLink,
      imageLinks
    } = this.props.item.volumeInfo;

    return (
      <div className='book-item'>
        <div>
          <img src={imageLinks.thumbnail} alt='no picture' />
        </div>
        <ul>
          <li>
            <a href={selfLink} target='_blank'>
              Go to Site
            </a>
          </li>
          <li>{title}</li>
          <li>{authors}</li>
          <li>{publisher}</li>
          <li>{publishedDate}</li>
          <li>{description}</li>
          <li>{pageCount}</li>
          <li>{infoLink}</li>
        </ul>
      </div>
    );
  }
}

export default BookItem;
