import React, { useState, useEffect } from 'react';
import UnauthenticatedApp from './UnauthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp'
import { 
  getUser, 
  acceptFriend, 
  rejectFriend, 
  acceptBookRequest,
  rejectBookRequest,
  deleteMessage,
  addFriend,
  updateTarget,
  addBook,
  deleteBook,
  updateBook
  } from './ApiService/serverApiService'
import { ActivityLog, User, AddFriend, BookRequest, NewBook, Book } from './Interfaces'
import './App.scss';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<any>()

  async function getUserData(name: string) {
    const user: User = await getUser(name);
    setUserLoggedIn(user);
  }

  // TODO: function that saves all friends books available to borrow to state

  useEffect(() => {

    //NEED TO HARD CODE USER AT THE MOMENT
    getUserData('Adam')
    //NEED TO HARD CODE USER AT THE MOMENT
  }, [])

  // function to add friend
  const handleAddFriend = async (obj: AddFriend) => {
    const result: User = await addFriend(obj);
    setUserLoggedIn(result)
  }

  // function to confirm friend
  const confirmFriend = async (activity: ActivityLog) => {
    const result: User = await acceptFriend(activity);
    setUserLoggedIn(result)
  }
  // function to reject friend request
  const rejectFriendRequest = async (activity: ActivityLog) => {
    const result: User = await rejectFriend(activity);
    setUserLoggedIn(result)
  }
  // function to confirm book request
  const confirmBookReq = async (activity: ActivityLog) => {
    const result: User = await acceptBookRequest(activity);
    setUserLoggedIn(result)
  }
  // function to reject book request
  const rejectBookReq = async (obj: BookRequest) => {
    const result: User = await rejectBookRequest(obj);
    setUserLoggedIn(result)
  }

  //function to remove messages with no actions from dashboard
  const removeMessage = async (activity: ActivityLog) => {
    const result: User = await deleteMessage(activity);
    setUserLoggedIn(result)
  }

  // update target
  const updateYearlyTarget = async (id: string, newTarget: number) => {
    const result: User = await updateTarget(id, newTarget);
    setUserLoggedIn(result)
  }
  
  // add book
  const addBookToBookCase = async (newbook: NewBook) => {
    const result: Array<Book> = await addBook(newbook);
    setUserLoggedIn({...userLoggedIn, books: result})
  }
  
  const removeBookFromBookCase = async (userId: string, bookId: string) => {
    const result: User = await deleteBook(userId, bookId);
    setUserLoggedIn(result)
  }
  
  const editBook = async (userId: string, bookId: string, newBook: Book) => {
    const result: User = await updateBook(userId, bookId, newBook)
    setUserLoggedIn(result)
  }
  console.log(userLoggedIn ,'HI THERE')

  return (
    <div>
    { userLoggedIn ? 
    <AuthenticatedApp 
    user={userLoggedIn} 
    confirmFriend={confirmFriend} 
    rejectFriendRequest={rejectFriendRequest} 
    confirmBookReq={confirmBookReq}
    rejectBookReq={rejectBookReq}
    removeMessage={removeMessage}
    handleAddFriend={handleAddFriend}
    updateYearlyTarget={updateYearlyTarget}
    addBookToBookCase={addBookToBookCase}
    removeBookFromBookCase={removeBookFromBookCase}
    editBook={editBook}
    /> : <UnauthenticatedApp setUserLoggedIn={setUserLoggedIn} getUserData={getUserData} />}
   </div>
  );
}

export default App;
