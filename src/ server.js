'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const logger = require('../src/middleware/ logger');
const validator=require('../src/middleware/validator');


// Global Middleware
app.use(logger);
app.use(express.json());

app.get('/',(req,res)=>{
  console.log('home');
  res.send('hello from home');
});


app.get('/person',validator,(req,res)=>{
  console.log(req.query.name);
  res.status(200).json({
    name:req.query.name,
  });


});

app.use('*', notFoundHandler);
app.use(errorHandler);

function listen(PORT) {
  app.listen(PORT, ()=>console.log(`run on ${PORT}`) );
}
module.exports = {
  app,
  listen,
};