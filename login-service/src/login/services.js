
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = 'suaChaveSecreta';

async function registrarUsuario(username, password, role = 'normal') { 
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, passwordHash: hashedPassword, role });
    return newUser.id;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return null;
  }
}

async function autenticarUsuario(username, password) {
  try {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.passwordHash)) {
      const token = jwt.sign({ userId: user.id, username: user.username, role: user.role }, secretKey, { expiresIn: '1h' }); 
      return token;
    }
    return null;
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    return null;
  }
}

module.exports = { registrarUsuario, autenticarUsuario };