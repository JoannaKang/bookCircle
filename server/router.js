const router = require('express').Router();
const {
  getCtrl,
  createUserCtrl,
  addBookCrtl,
  addFriendCtrl,
  confirmFriendCtrl,
  updateTargetCtrl,
  rejectFriendRequestCtrl,
  removeActivityLogElementCtrl,
  getUserCtrl,
  getFriendsNameCtrl,
  requestBookCtrl,
  acceptBookRequestCtrl,
  rejectBookRequestCtrl,
  searchUsersCtrl,
  getAvailableBooksCtrl,
  editBookCtrl,
  deleteBook
} = require('./controller')

router.get('/api/', getCtrl)
// USER ROUTES
router.get('/api/getUser/:name', getUserCtrl)
router.post('/api/createUser', createUserCtrl)
router.put('/api/updateTarget', updateTargetCtrl) //TODO: Can this be deleted??
router.delete('/api/removeActivityLogElement', removeActivityLogElementCtrl)
//FRIEND ROUTES
router.get('/api/searchFriend/:name', searchUsersCtrl)
router.post('/api/addFriend', addFriendCtrl)
router.post('/api/confirmFriend', confirmFriendCtrl)
router.delete('/api/rejectFriendRequest', rejectFriendRequestCtrl)
router.get('/api/getFriendsNames/:id', getFriendsNameCtrl)
//BOOK ROUTES
router.post('/api/addBook', addBookCrtl)
router.post('/api/requestBook', requestBookCtrl)
router.post('/api/acceptBookRequest', acceptBookRequestCtrl)
router.post('/api/rejectBookRequest', rejectBookRequestCtrl)
router.get('/api/availableBooks/:userId', getAvailableBooksCtrl)
router.put('/api/editBook', editBookCtrl)
router.delete('/api/deleteBook', deleteBook)

// ROUTES REQUIRED TODO:

// TODO: get user info upon login => router.get('/:username')

// TODO: remove book from library => router.delete('/removeBook') => if added wrong book for example


module.exports = router