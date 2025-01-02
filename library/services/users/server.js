require('dotenv').config(); // Import dotenv

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../../config/database');
const usersRoutes = require('./users.routes');

const app = express();
const PORT = process.env.PORT_USERS || 3003; // Port z .env

app.use(bodyParser.json());
app.use(usersRoutes);

sequelize.sync().then(() => {
  console.log('Users service database connected');
  app.listen(PORT, () => console.log(`Users service running on port ${PORT}`));
});

app.get('/', (req, res) => {
    res.send('Welcome to the Users Service!');
  });
  