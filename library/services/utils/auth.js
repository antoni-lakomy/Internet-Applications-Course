const jwt = require('jsonwebtoken');
require('dotenv').config();

// Funkcja do generowania tokenu
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateToken };
