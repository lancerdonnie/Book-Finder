import React, { Component } from 'react';

class BookItem extends Component {
  render() {
    const { selfLink } = this.props.item;
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
        <div className='book-image'>
          <img className='center' src={imageLinks.thumbnail} alt='empty' />
        </div>
        <ul className='py book-list'>
          <li>title:{title}</li>
          <li>authors:{authors}</li>
          <li>publisher:{publisher}</li>
          <li>Date Published:{publishedDate}</li>
          <li>Pages:{pageCount} </li>
          {description && <li>Description:{description.slice(0, 120)}...</li>}
          {/* <li>{selfLink}</li> */}
          <li>
            <a rel='noopener noreferrer' href={infoLink} target='_blank'>
              learn more
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default BookItem;
