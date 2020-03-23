const express = require('express');

const SessionControler = require('./src/controllers/SessionController');

const routes = express.Router();

routes.get('/',(req,res)=>res.send({hello:"world"}));

routes.post('/session',SessionControler.store);

module.exports = routes;