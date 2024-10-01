// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
  bio: { type: String },
  profilePicture: { type: String },
  favoriteGames: [String]
});

module.exports = mongoose.model('User', userSchema);
