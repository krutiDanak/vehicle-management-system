const express = require('express')
const router = express.Router()

let userController = require('../controllers/userController')
let vehicleController = require('../controllers/vehicleController')
let vehicleOwnershipController = require('../controllers/vehicleOwnershipController')

// Post API
router.post('/addUser', userController.addUser)
router.post('/addVehicle', vehicleController.addVehicle)
router.post('/addVehicleOwnership', vehicleOwnershipController.addVehicleOwnership)

// Get API
router.get('/user_owned_vechicles/:id', vehicleOwnershipController.userOwnedVechicles)
router.get('/vehicles_occupied', vehicleOwnershipController.vehiclesOccupied)
router.get('/vehicle_available', vehicleOwnershipController.vehicleAvailable)
module.exports = router
