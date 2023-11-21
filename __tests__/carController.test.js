// __tests__/carController.test.js
const carController = require('../controllers/carController');

describe('createCar', () => {
  it('should create a new car', async () => {
    const req = {
      body: {
        make: 'Toyota',
        model: 'Camry',
        date: '2023-01-01',
        price: 25000,
        picture: 'image.jpg',
        mileage: '50,000 miles',
        fuel: 'Petrol',
        transmission: 'MANUAL'
      }
    };

    const res = {
      status: jest.fn(),
      json: jest.fn()
    };

    await carController.createCar(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });

  // Ajoutez d'autres tests...
});
