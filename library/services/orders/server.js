require('dotenv').config(); // Import dotenv

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../../config/database');
const ordersRoutes = require('./orders.routes');

const app = express();
const PORT = process.env.PORT_ORDERS || 3002; // Port z .env

app.use(bodyParser.json());
app.use(ordersRoutes);

sequelize.sync().then(() => {
  console.log('Orders service database connected');
  app.listen(PORT, () => console.log(`Orders service running on port ${PORT}`));
});

app.get('/', (req, res) => {
    res.send('Welcome to the Orders Service!');
  });
  
