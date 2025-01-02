const bcrypt = require('bcrypt');
const User = require('./users.model');
const { generateToken } = require('../utils/auth'); // Import funkcji generującej token


// Rejestracja użytkownika
exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email już jest używany.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    const token = generateToken(newUser.id); // Generowanie tokenu dla nowego użytkownika
    res.status(201).json({ message: 'Użytkownik zarejestrowany', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};


// Logowanie użytkownika
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Nieprawidłowe hasło' });
    }

    const token = generateToken(user.id); // Generowanie tokenu dla użytkownika
    res.status(200).json({ message: 'Zalogowano', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};


// module.exports = {
//   registerUser,
//   loginUser,
//   authenticate,
// };
