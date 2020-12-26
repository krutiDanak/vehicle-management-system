let { vehicleOwnerships } = require('../models/vehicleOwnership');
let vehicleOwnershipService = require('../services/vehicleOwnershipService');
const responseHelper = require('../helpers/responseHelper');
const mongoose = require('mongoose')

exports.addVehicleOwnership = async (req, res) => {
    let data = req.body;
    let isAvailable = await vehicleOwnerships.findOne({ vehicleId: mongoose.Types.ObjectId(req.body.vehicleId) })
    if (isAvailable) return responseHelper.sendJsonResponse(req, res, 400, [], 'This vehicle has been alloted.', 'Error')
    var result = await vehicleOwnerships(data)

    result.save(function (err, doc) {
        if (err) return responseHelper.sendJsonResponse(req, res, 500, 'Error', 'Error', 'Error')
        return responseHelper.sendJsonResponse(req, res, 200, doc, 'success', 'success')
    });
};

exports.userOwnedVechicles = async (req, res) => {
    let result = await vehicleOwnershipService.getUserOwnedVechicles(req.params.id)
    if (result.length === 0) return responseHelper.sendJsonResponse(req, res, 404, [], 'No Vehicle found.', 'Error')
    return responseHelper.sendJsonResponse(req, res, 200, result[0].vehicles, 'success', 'success')
};

exports.vehiclesOccupied = async (req, res) => {
    let result = await vehicleOwnershipService.getVehiclesOccupied()
    if (result.length === 0) return responseHelper.sendJsonResponse(req, res, 404, [], 'No Vehicle found.', 'Error')
    console.log(result[0])
    return responseHelper.sendJsonResponse(req, res, 200, result, 'success', 'success')
};

exports.vehicleAvailable = async (req, res) => {
    let result = await vehicleOwnershipService.vehicleAvailable()
    return responseHelper.sendJsonResponse(req, res, 200, result, 'success', 'success')
};