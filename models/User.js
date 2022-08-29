const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    skillLevel: {
      type: String
    },
    location: {
      city: {
        type: String
      },
      state: {
        type: String
      }
    },
    groups: {
      ownedGroups: {
        type: Array
      },
      joinedGroups: {
        type: Array
      }
    },
    events: {
      createdEvents: {
        type: Array
      },
      joinedEvents: {
        type: Array
      }
    }
    // might want to add image down the line, will depend on AWS configuration
  }, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);