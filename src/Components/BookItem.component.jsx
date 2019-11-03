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
        <div>
          <img src={imageLinks.thumbnail} alt='no picture' />
        </div>
        <ul>
          <li>title:{title}</li>
          <li>authors:{authors}</li>
          <li>publisher:{publisher}</li>
          <li>Date Published:{publishedDate}</li>
          <li>Pages:{pageCount} </li>
          {description && <li>Description:{description.slice(0, 150)}</li>}
          {/* <li>{infoLink}</li> */}
          <li>
            <a href={selfLink} target='_blank'>
              more info
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default BookItem;
