const express = require('express');
const path = require('path')
const bodyParser = require('body-parser'); //Input HTML
const app = express();
//
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src/views/style'));

//

app.use('/api/condominium/', require('./src/controller/CondominiumController'));
app.use('/api/blocos/', require('./src/controller/BlocosController'));


app.listen('3001');
