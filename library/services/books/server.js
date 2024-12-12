require('dotenv').config(); // Import dotenv na samym początku

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../../config/database');
const booksRoutes = require('./books.routes');

const app = express();
const PORT = process.env.PORT_BOOKS || 3001; // Odczyt portu z .env

app.use(bodyParser.json());
app.use(booksRoutes);

sequelize.sync().then(() => {
  console.log('Books service database connected');
  app.listen(PORT, () => console.log(`Books service running on port ${PORT}`));
});

app.get('/', (req, res) => {
    res.send('Welcome to the Books Service!');
  });
  