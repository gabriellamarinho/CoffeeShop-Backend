const express = require('express');
const routes = require("./routes/routes")
const middlewares = require('./middlewares');


const app = express();

const dbhost = process.env.DB_HOST;

app.use(routes);

app.listen(3)
class App{
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();

  }


middlewares(){
  this.server.use(express.json())
}

routes(){
  this.server.use(routes);
}
}


module.exports= new App().server
