  var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));

require('./mongo')
var ffind = require('./route/find')(express.Router(), Hos);
app.use('/find',ffind);

app.listen(7853, ()=>{
  console.log('Fuck up the Server on Port 7853');
});

module.exports = app;
