// routes/carRoutes.js
const express = require('express');
const carController = require('../controllers/carController');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: API for managing cars
 */

/**
 * @swagger
 * /api/v1/car:
 *   post:
 *     summary: Create a new car
 *     description: Endpoint for creating a new car
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: car
 *         description: The car object to be created
 *         in: body
 *         required: true
 *     responses:
 *       201:
 *         description: Successfully created car
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */
router.post('/', carController.createCar);
router.get('/carsByFuelAndMaxPrice/:fuel/:maxPrice', carController.getCarsByFuelAndMaxPrice);
router.get('/makes', carController.findAllCarMakes);
router.put('/updatePicture/:carId', carController.updateCarPicture);

module.exports = router;
