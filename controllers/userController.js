let { users } = require('../models/user');
const responseHelper = require('../helpers/responseHelper')


exports.addUser = async (req, res) => {
    let data;
    data = {
        'firstName': req.body.firstName,
        'lastName': req.body.lastName,
        'email': req.body.email,
        'phone': req.body.phone,
        'location.latitude': req.body.latitude,
        'location.longitude': req.body.longitude,
    }

    var result = await users(data);

    result.save(function (err, doc) {
        if (err) return responseHelper.sendJsonResponse(req, res, 500, 'Error', 'Error', 'Error')
        return responseHelper.sendJsonResponse(req, res, 200, doc, 'success', 'success')
    });
    console.log(result)
};
