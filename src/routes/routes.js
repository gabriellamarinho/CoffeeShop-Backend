const { Router } = require('express');

const routes = new Router();

routes.get('/carrinho', (req,res)=>{
    return res.json({messsage:"hello"})
});

routes.get('/categoria', (req,res)=>{
    return res.json({messsage:"hello"})
});

routes.get('/notaFiscal', (req,res)=>{
    return res.json({messsage:"hello"})
});

routes.get('/pagamento', (req,res)=>{
    return res.json({messsage:"hello"})
});

routes.get('/pedido', (req,res)=>{
    return res.json({messsage:"hello"})
});

routes.get('/produto', (req,res)=>{
    return res.json({messsage:"hello"})
});

routes.get('/usuario', (req,res)=>{
    return res.json({messsage:"hello"})
});

modules.export = routes;
