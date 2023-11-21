// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/carsDB');

app.use(bodyParser.json());

// Configuration Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car API',
      version: '1.0.0',
      description: 'API documentation for the Car API',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Importez les routes
const carRoutes = require('./routes/carRoutes');

// Utilisez les routes
app.use('/api/v1/car', carRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - make
 *         - model
 *         - date
 *         - price
 *         - picture
 *         - mileage
 *         - fuel
 *         - transmission
 *       properties:
 *         make:
 *           type: string
 *         model:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *         price:
 *           type: number
 *         picture:
 *           type: string
 *         mileage:
 *           type: string
 *         fuel:
 *           type: string
 *           enum: [Petrol, Diesel, Electric]
 *         transmission:
 *           type: string
 *           enum: [MANUAL, SEMI_AUTOMATIC, AUTOMATIC]
 */
