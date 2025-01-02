const express = require('express');
const { authenticateJWT } = require('../middleware/authMiddleware'); // Import middleware'u
const { getAllBooks, getBookById, addBook, deleteBook } = require('./books.controller');
const router = express.Router();

router.get('/api/books', getAllBooks);
router.get('/api/books/:id', getBookById);
router.post('/api/books', addBook);
router.delete('/api/books/:id', deleteBook);

module.exports = router;
