const Book = require('./books.model');

const getAllBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

const addBook = async (req, res) => {
  const { title, author, year } = req.body;
  const book = await Book.create({ title, author, year });
  res.status(201).json(book);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const result = await Book.destroy({ where: { id } });
  if (!result) return res.status(404).json({ error: 'Book not found' });
  res.json({ message: 'Book deleted successfully' });
};

module.exports = { getAllBooks, getBookById, addBook, deleteBook };
