
const loginService = require('./services');

async function registrarUsuarioNormal(req, res) { 
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios.' });
    }
    const userId = await loginService.registrarUsuario(username, password);
    if (userId) {
      return res.status(201).json({ message: 'Usuário registrado com sucesso!', userId });
    } else {
      return res.status(500).json({ message: 'Erro ao registrar o usuário.' });
    }
  } catch (error) {
    console.error('Erro no controller de registro:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

async function registrarAdministrador(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios.' });
    }
    const userId = await loginService.registrarUsuario(username, password, 'admin'); 
    if (userId) {
      return res.status(201).json({ message: 'Administrador registrado com sucesso!', userId });
    } else {
      return res.status(500).json({ message: 'Erro ao registrar o administrador.' });
    }
  } catch (error) {
    console.error('Erro no controller de registro de administrador:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

async function loginUsuario(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios.' });
    }
    const token = await loginService.autenticarUsuario(username, password);
    if (token) {
      return res.status(200).json({ message: 'Login bem-sucedido!', token });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error('Erro no controller de login:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

module.exports = { registrarUsuarioNormal, registrarAdministrador, loginUsuario };