const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const admin = require('./routes/admin');
//const mongoose = require('mongoose');

// Configurações
   //BodyParser
      app.use(bodyParser.urlencoded({extended: true}));
      app.use(bodyParser.json());
   //handlebars
      app.engine('handlebars', handlebars({defaultLayout: 'main'}));
      app.set('view engine','handlebars');
   //mongoose
      // Em breve
//
// Public
   app.use(express.static(path.join(__dirname,"public")));
//
// Rotas
   app.use('/admin', admin);

//

const PORT = 8081;
app.listen(PORT, ()=> {
   console.log('Server Online!');
});