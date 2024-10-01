const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  prizePool: {
    type: Number,
    required: true,
  },
  teams: {
    type: [String], 
    default: [],
  },
}, { timestamps: true });

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
