const express = require('express');
const corsMiddleware = require('./config/cors'); // Importe a configuração do CORS

const app = express();

app.use(corsMiddleware); // Aplique o middleware do CORS

// ... suas rotas e outras configurações ...

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});