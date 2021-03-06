const mongoose = require('mongoose');
const { stringify } = require('uuid');
//TODO: redefine schema for postgresql
const activityLogSchema = new mongoose.Schema({
    message: String,
    type: String,
    senderId: { type: mongoose.Schema.Types.ObjectId },
    createdAt: Date,
    book: String,
    activityId: Number,
    title: String
})

const userSchema = mongoose.Schema({
    googleId: String,
    email: String,
    name: String,
    password: String,
    books: Array,
    friends: Array,
    pendingFriends: Array,
    activityLog: [activityLogSchema],
    yearlyTarget: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// DATA STRUCTURE TODO:
/*
{
  {
    _id: 1827312,
    name: "hairyBellyNo4",
    password: string
    books: [
      {
        title: string,
        author: string,
        imageUrl: string,
        dateRead: date,
        review: string,
        availableToBorrow: boolean,
        wantBack: boolean,
        genre: string,
        star: boolean
      },{...},{...}
    ],
    friends: [_id, _id, _id, _id],
    pendingFriends: [_id, _id]
    activityLog: [{request: 'string', type: (bookRequest/friendRequest) 'string',}],
    yearlyTarget: number;
  }
}
*/

// CREATE TABLE user (
//   NAME 
//   password: String,
//   books: Array,
//   friends: Array,
//   pendingFriends: Array,
//   activityLog: [activityLogSchema],
//   yearlyTarget: Number
// )