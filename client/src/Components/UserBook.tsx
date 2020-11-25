import React, { FunctionComponent, useEffect, useState } from "react";
import { Book, User } from '../Interfaces'
import { AiFillStar, AiFillCloseCircle } from "react-icons/ai";
import EditBook from '../Components/EditBook'


import './UserBook.scss'

type UserBookProps = {
  clickedBook: Book,
  handleClosePopOut: Function,
  updateAvailableBooks?: Function,
  user: User,
  removeBookFromBookCase: Function,
  setClickedBook: Function,
  editBookFunc: Function
}
const UserBook: FunctionComponent<UserBookProps> = (
  {
    clickedBook,
    handleClosePopOut,
    user,
    removeBookFromBookCase,
    setClickedBook,
    editBookFunc
  }) => {
  const [editBook, setEditBook] = useState<boolean>(false)

  const handleEditClick = () => {
    console.log('HandleEditClick')
    setEditBook(true)
  }

  const handleCloseClick = (): void => {
    handleClosePopOut()
  }

  //TODO: edit popup should open when user click edit button
  //TODO: user can edit book info when click edit button
  //TODO: user can update review /genre / start read / can lend / date read info when click "save""" button
  //TODO: use can delete book info when click "delete" button
  return (
    <div className="UserBookClickedDiv">
      {editBook &&
        <EditBook
          book={clickedBook}
          deleteFunc={removeBookFromBookCase}
          update={() => { }}
          setEditBook={setEditBook}
          userId={user._id}
          setClickedBook={setClickedBook}
          editBookFunc={editBookFunc}
        />}
      <div className="UserBookPopOutDiv">
        <AiFillCloseCircle onClick={handleCloseClick} className="UserBookEscapeButton" />

        <div className="SelectedBookDisplayDiv">
          <img src={clickedBook.imageUrl} alt="imgUrl" />
          {clickedBook.star && <AiFillStar className="SelectedBookStar" />}
        </div>
        <div className="UserBookPopOutContentContainer">
          <h3>{clickedBook.title}</h3>
          <h4>Your Review:</h4>
          <p>{clickedBook.review}</p>
          <h3>{clickedBook.genre}</h3>
          <p>{`Read ${clickedBook.dateRead}`}</p>
          <p>{clickedBook.availableToBorrow ? `Available to Borrow` : `Unavailable to Borrow`}</p>
          <button className="editBookBtn" onClick={handleEditClick}>edit</button>
        </div>
      </div>
    </div>
  )
}

export default UserBook;
