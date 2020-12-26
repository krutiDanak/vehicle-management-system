let { vehicles } = require('../models/vehicle');
const responseHelper = require('../helpers/responseHelper')


exports.addVehicle = async (req, res) => {
    let data = req.body;
    var result = await vehicles(data)

    result.save(function (err, doc) {
        if (err) return responseHelper.sendJsonResponse(req, res, 500, 'Error', 'Error', 'Error')
        return responseHelper.sendJsonResponse(req, res, 200, doc, 'success', 'success')
    });
};
