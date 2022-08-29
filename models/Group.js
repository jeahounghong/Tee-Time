const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ownerId: {
        type: Number,
        required: true 
    },
    users: {
        type: Array
    },
    events: {
        type: Array
    },
    description: {
        type: String
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