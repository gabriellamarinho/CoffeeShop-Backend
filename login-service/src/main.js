
const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./src/login/routes');
const database = require('./src/config/database'); 

const app = express();
const port = process.env.PORT || 3000; 
app.use(bodyParser.json());

app.use('/auth', loginRoutes); 

// rota de status
app.get('/status', (req, res) => {
  res.status(200).json({ message: 'Login service is running!' });
});

async function iniciarServidor() {
  try {
    await database.authenticate(); 
    console.log('Conexão com o banco de dados estabelecida com sucesso.');


    app.listen(port, () => {
      console.log(`Serviço de login rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

iniciarServidor();