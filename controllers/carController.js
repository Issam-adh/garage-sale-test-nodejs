// controllers/carController.js
const Car = require('../models/car');

exports.createCar = async (req, res) => {
  const car = req.body;

  try {
    const registrationYear = new Date(car.date).getFullYear();
    if (registrationYear <= 2015) {
      return res.status(400).json({ error: 'Car registration year must be after 2015' });
    }

    const savedCar = await Car.create(car);
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCarsByFuelAndMaxPrice = async (req, res) => {
  const { fuel, maxPrice } = req.params;

  try {
    const cars = await Car.find({ fuel, price: { $lte: maxPrice } });

    if (cars.length === 0) {
      return res.status(204).send();
    }

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findAllCarMakes = async (req, res) => {
  try {
    const allCars = await Car.find();
    const carMakes = new Set(allCars.map(car => car.make));
    res.status(200).json(Array.from(carMakes));
  } catch (error) {
    res.status(406).json({ error: error.message });
  }
};

exports.updateCarPicture = async (req, res) => {
  const { carId } = req.params;
  const { newPicture } = req.body;

  try {
    const car = await Car.findById(carId);

    if (!car) {
      return res.status(404).send();
    }

    car.picture = newPicture;
    await car.save();

    res.status(200).send('Car picture updated successfully');
  } catch (error) {
    res.status(500).json({ error: `Error updating car picture: ${error.message}` });
  }
};
