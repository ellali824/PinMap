const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//under construction 

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  /*
  location: {
    type: String,
    required: true
  },
  reason: {
    type: String
  },
  activities: {
    type: String
  },
  */
  text: {
    type: String,
    required: true
  }
  /*,
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
*/
});

module.exports = mongoose.model('post', PostSchema);