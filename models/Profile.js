// the user's profile 

const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  basedin: {
    type: String,
    required: true
  },
  recent: {
    type: String
  },
  live: {
    type: String
  },
  fave: {
    type: String,
  },
  bio: {
    type: String
  },
  
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    vsco: {
      type: String
    },
    web: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
