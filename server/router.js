const router = require('express').Router();
const { 
  getCtrl, 
  createUserCtrl, 
  addBookCrtl, 
  addFriendCtrl,
   confirmFriendCtrl, 
   updateTargetCtrl,
   rejectFriendRequestCtrl
   } = require('./controller')

router.get('/', getCtrl)
router.post('/createUser', createUserCtrl)
router.post('/addBook', addBookCrtl)
router.post('/addFriend', addFriendCtrl)
router.post('/confirmFriend', confirmFriendCtrl)
router.put('/updateTarget', updateTargetCtrl)
router.delete('/rejectFriendRequest', rejectFriendRequestCtrl)

// ROUTES REQUIRED TODO:

// TODO: get user info upon login => router.get('/:username')

// TODO: remove book from library => router.delete('/removeBook') => if added wrong book for example

// TODO: reject friend request => router.delete('/removeFriendRequest)

// TODO: delete activity log element => router.delete('./removeActivityLogElement')

// TODO: request book from friend => router.post('/requestBook)

// TODO: accept book request => router.put('/acceptBookRequest')

// TODO: reject book request => router.put('/rejectBookRequest')

module.exports = router