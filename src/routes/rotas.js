const { Router } = require('express');

const routes = new Router();

modules.export = routes;


routes.get('/', (req,res)=>{
    return res.json({messsage:"hello"})
});


