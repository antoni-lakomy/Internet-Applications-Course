const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Brak tokenu. Autoryzacja wymagana.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Dekodujemy userId z tokenu
    next(); // Przekazuje żądanie dalej
  } catch (error) {
    console.error(error);
    return res.status(403).json({ error: 'Nieprawidłowy token.' });
  }
};

module.exports = { authenticateJWT };
