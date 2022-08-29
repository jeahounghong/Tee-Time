const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ownerId: {
        type: ObjectId,
        required: true 
    },
    users: {
        type: Array
    },
    events: {
        type: Array
    },
    description: {
        type: String,
        required: true
    },
    location: {
        city: {
            type: String
        },
        state: {
            type: String
        }
    }
    // Image key for when we set up AWS 
})

module.exports = Group = mongoose.model('Group', GroupSchema)