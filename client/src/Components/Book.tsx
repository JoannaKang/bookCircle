import React, { FunctionComponent } from 'react';
import { Book, BorrowableBook } from '../Interfaces';
import { AiFillStar } from "react-icons/ai";
import './Book.scss'


type BookProps = {
  book: any,
  handleBookClicked: Function,
}

const BookDisplay: FunctionComponent<BookProps> = ({book, handleBookClicked}) => {

  const handleClick = () => {
    handleBookClicked(book)
  }

  return (
    <div className="BookDisplay">
      <img className="book" 
      src={book.imageUrl} 
      alt={`${book.title} book cover`}
      onClick={handleClick}
      />
      {book.star && <AiFillStar className="star" />}
    </div>
  )
}

export default BookDisplay;
