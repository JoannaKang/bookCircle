import { User, ActivityLog, Book, AddFriend, BookRequest, NewBook } from '../Interfaces'

const URL = '/api/'

async function createUser(data: object) {
  console.log(data, 'API!');
  //should send data to backend /createUser
  const createUser = await fetch(URL + 'createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())

  console.log(typeof createUser, createUser, 'USER RESPONSE');
  return createUser;

}

async function getUser(name: string): Promise<User> {
  const user = await fetch(URL + 'getUser/' + name)
    .then(response => response.json())

  return user[0];
}

async function getFriendName(name: string): Promise<Object> {
  const friendsName = await fetch(URL + 'getFriendsNames/' + name)
    .then(response => response.json())
  return friendsName.name;
}

async function searchFriend(name: string): Promise<Object> {
  const friend = await fetch(URL + 'searchFriend/' + name)
    .then(response => response.json())
  return friend;
}

async function addFriend(obj: AddFriend): Promise<User> {
  const result = await fetch(URL + 'addFriend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
  return result;
}

async function acceptFriend(activity: ActivityLog): Promise<User> {
  const result = await fetch(URL + 'confirmFriend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(activity)
  })
    .then(response => response.json())
  return result;
}

async function rejectFriend(activity: ActivityLog): Promise<User> {
  const result = await fetch(URL + 'rejectFriendRequest', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(activity)
  })
    .then(response => response.json())
  return result;
}

async function addBook(newbook: NewBook) {
  const result = await fetch(URL + 'addBook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newbook)
  })
    .then(response => response.json())

  return result
}

async function deleteBook(userId: string, bookId: string) {
  const result = await fetch(URL + 'deleteBook', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, bookId })
  }).then(response => response.json())
  return result;
}

async function updateBook(userId: string, bookId: string, newBook: Book) {
  const result = await fetch(URL + 'editBook', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, bookId, newBook })
  }).then(response => response.json())
  return result;
}

async function getAvailableBooks(id: string | null) {
  return await fetch(URL + 'availableBooks/' + id)
    .then(response => response.json())
}

async function requestBook(obj: BookRequest) {
  const result = await fetch(URL + 'requestBook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
  return result;
}

async function acceptBookRequest(activity: ActivityLog): Promise<User> {
  const result = await fetch(URL + 'acceptBookRequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(activity)
  })
    .then(response => response.json())
  return result;
}

async function rejectBookRequest(obj: BookRequest): Promise<User> {
  const result = await fetch(URL + 'rejectBookRequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
  return result;
}

async function deleteMessage(activity: ActivityLog): Promise<User> {
  const result = await fetch(URL + 'removeActivityLogElement', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(activity)
  })
    .then(response => response.json())
  return result;
}

async function updateTarget(id: string, newTarget: number) {
  return await fetch(URL + 'updateTarget', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id: id, target: newTarget })
  })
    .then(response => response.json())
}

export {
  createUser,
  getUser,
  getFriendName,
  acceptFriend,
  rejectFriend,
  requestBook,
  addBook,
  acceptBookRequest,
  rejectBookRequest,
  deleteMessage,
  searchFriend,
  addFriend,
  getAvailableBooks,
  updateTarget,
  deleteBook,
  updateBook
}