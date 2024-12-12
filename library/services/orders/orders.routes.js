const express = require('express');
const { authenticateJWT } = require('../middleware/authMiddleware'); // Import middleware'u
const {
  getOrdersByUserId,
  createOrder,
  deleteOrder,
  updateOrder,
} = require('./orders.controller');

const router = express.Router();

router.get('/api/orders/:userId', getOrdersByUserId);
router.post('/api/orders', createOrder);
router.delete('/api/orders/:orderId', deleteOrder);
router.patch('/api/orders/:orderId', updateOrder);

module.exports = router;
