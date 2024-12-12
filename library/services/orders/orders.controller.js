const Order = require('./orders.model');
const axios = require('axios');

// Pobieranie zamówień użytkownika
const getOrdersByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.findAll({ where: { userId } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Nie można pobrać zamówień.' });
  }
};

// Tworzenie nowego zamówienia
const createOrder = async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  try {
    // Sprawdzenie, czy książka istnieje
    const bookResponse = await axios.get(`http://localhost:3001/api/books/${bookId}`);
    if (!bookResponse.data) {
      return res.status(404).json({ error: 'Książka o podanym ID nie istnieje.' });
    }

    // Dodanie zamówienia
    const order = await Order.create({ userId, bookId, quantity });
    res.status(201).json({ id: order.id });
  } catch (error) {
    res.status(500).json({ error: 'Nie można dodać zamówienia.' });
  }
};

// Usuwanie zamówienia
const deleteOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const deleted = await Order.destroy({ where: { id: orderId } });
    if (!deleted) {
      return res.status(404).json({ error: 'Zamówienie nie istnieje.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Nie można usunąć zamówienia.' });
  }
};

// Aktualizacja zamówienia
const updateOrder = async (req, res) => {
  const orderId = req.params.orderId;
  const { quantity } = req.body;

  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Zamówienie nie istnieje.' });
    }

    order.quantity = quantity;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Nie można zaktualizować zamówienia.' });
  }
};

module.exports = {
  getOrdersByUserId,
  createOrder,
  deleteOrder,
  updateOrder,
};
