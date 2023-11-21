// models/car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  picture: { type: String, required: true },
  mileage: { type: String, required: true },
  fuel: { type: String, enum: ['PETROL', 'DIESEL', 'ELECTRIC'], required: true },
  transmission: { type: String, enum: ['MANUAL', 'SEMI_AUTOMATIC', 'AUTOMATIC'], required: true },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
