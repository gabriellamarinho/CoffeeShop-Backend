// index.js ou server.js
const express = require('express');
const routes = require("./routes/routes");
const sequelize = require('./config/database'); // Importe a instância do Sequelize
const Product = require('./models/product'); // Importe seus models
// Importe outros models aqui...

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza todos os models definidos
    await sequelize.sync({ alter: true }); // Use { force: true } com cuidado em desenvolvimento
    console.log('Banco de dados sincronizado.');

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
}

syncDatabase();