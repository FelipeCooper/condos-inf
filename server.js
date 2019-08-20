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

app.use('/api/condominium/', require('./src/routes/CondominiumRoutes'));
app.use('/api/blocos/', require('./src/routes/BlocosRoutes'));
app.use('/api/address', require('./src/routes/AddressRoutes'))

app.listen('3001');
