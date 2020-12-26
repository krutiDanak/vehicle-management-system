const mongoose = require('mongoose')

var vehicleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: null
        },
        brand: {
            type: String,
            default: null
        },
        number: {
            type: String,
            default: null
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
    },
    {
        collection: 'vehicles'
    }
)

var vehicles = mongoose.model('vehicles', vehicleSchema)
module.exports.vehicles = vehicles
