const express = require('express');
const corsMiddleware = require('./config/cors');

const app = express();

app.use(corsMiddleware); 


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});