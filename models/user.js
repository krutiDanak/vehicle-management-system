const mongoose = require('mongoose')

var userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            default: null
        },
        lastName: {
            type: String,
            default: null
        },
        email: {
            type: String,
            default: null
        },
        phone: {
            type: Number,
            default: null
        },
        location: {
            latitude: {
                type: Number,
                default: null
            },
            longitude: {
                type: Number,
                default: null
            }
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
    },
    {
        collection: 'users'
    }
)

var users = mongoose.model('users', userSchema)
module.exports.users = users
