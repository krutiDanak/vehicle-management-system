let { vehicleOwnerships } = require('../models/vehicleOwnership');
const mongoose = require('mongoose')
let { vehicles } = require('../models/vehicle');

exports.getUserOwnedVechicles = async (userId) => {
    return await vehicleOwnerships.aggregate([

        { $match: { 'userId': mongoose.Types.ObjectId(userId) } },
        {
            $lookup:
            {
                from: "vehicles",
                localField: "vehicleId",
                foreignField: "_id",
                as: "vehicles"
            },

        },
        {
            $unwind:
            {
                path: '$vehicles',
                preserveNullAndEmptyArrays: false
            }
        },
        { $skip: 0 },
        { $limit: 10 },
        {
            $group:
            {
                _id: '$userId',
                vehicles: { $addToSet: '$vehicles' }
            }
        },
        {
            $project:
            {
                _id: 0,
                vehicles: 1
            }
        },

    ])
}

exports.getVehiclesOccupied = async () => {
    return await vehicleOwnerships.aggregate([

        {
            $lookup:
            {
                from: "vehicles",
                localField: "vehicleId",
                foreignField: "_id",
                as: "vehicles"
            },

        },
        {
            $unwind:
            {
                path: '$vehicles',
                preserveNullAndEmptyArrays: false
            }
        },

        {
            $group:
            {
                _id: '$vehicleId',
                name: { $first: '$vehicles.name' },
                brand: { $first: '$vehicles.brand' },
                number: { $first: '$vehicles.number' }
            }
        },
        { $skip: 0 },
        { $limit: 10 },
    ])
}
exports.vehicleAvailable = async () => {

    // Get Alloted Vehicles List Ids
    let vehiclesOwnershipsList = await vehicleOwnerships.find({}, { vehicleId: 1 })

    // Get Ids Array
    let vehicleIds = vehiclesOwnershipsList.map(index => JSON.stringify(index.vehicleId));

    // Get All vehicles List
    let vehiclesList = await vehicles.find({})

    // Get Avalailable vehicles List
    var filteredList = vehiclesList.filter(function (key) {
        return !vehicleIds.includes(JSON.stringify(key._id))
    });
    return filteredList
}
