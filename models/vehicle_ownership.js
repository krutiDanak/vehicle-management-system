const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var vehicleUserSchema = new mongoose.Schema(
    {
        vehicleId: {
            type: Schema.Types.ObjectId,
            ref: 'vehicles'
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    {
        collection: 'vehicleOwnerships'
    }
)

var vehicles = mongoose.model('vehicleOwnerships', vehicleUserSchema)
module.exports.users = vehicles
