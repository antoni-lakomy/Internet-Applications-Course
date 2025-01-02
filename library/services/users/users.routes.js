const express = require('express');
const { register, login } = require('./users.controller'); // Import funkcji kontrolera
const { authenticateJWT } = require('../middleware/authMiddleware'); // Middleware

const router = express.Router();

// Endpointy użytkowników
router.post('/api/register', register); // Rejestracja
router.post('/api/login', login); // Logowanie

module.exports = router;
