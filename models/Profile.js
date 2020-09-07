// the user's profile 
//CHANGED A LOT 
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  //p: "company"
  basedin: {
    type: String,
    required: true
  },
  //p: "website"
  recent: {
    type: String
  },
  //p: location
  live: {
    type: String
  },
  //p: status, required
  fave: {
    type: String,
  },
  //d skills
  bio: {
    type: String
  },
  //d githubusername
  /*
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  */
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    //p: facebook
    vsco: {
      type: String
    },
    //p: linkedin
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
